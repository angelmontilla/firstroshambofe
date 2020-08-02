import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SrvfirstroshamboService {

  private URL_REST: string = 'http://192.168.1.37:8080/roshambo/playround';

  /**
   * Creates an instance of SrvfirstroshamboService.
   * <p>It takes IoC for client</p>
   * <p>Remember no life cycle here</p>
   * 
   * @param {HttpClient} client ID for HttpClient
   * @memberof SrvfirstroshamboService
   */
  constructor(private client: HttpClient) { }

  /**
   * @description like in tdd this is the simple approach
   *
   * @returns
   * @memberof SrvfirstroshamboService
   */
  public askGetPlay(first: string, second: string) {
    //return this.client.get(this.URL_REST); CORS FAILS
    //return this.client.get(this.URL_REST).pipe(catchError(this.handError)); SOMETHING MORE FAILS
    //return this.client.get(this.URL_REST).pipe(retry(3), catchError(this.handError)); //we have try it all times
    //BAD REQUEST

    let options: Object = { params: new HttpParams({fromString: `r1=${first}&r2=${second}`}), observe: 'response'};
    return this.client.get(this.URL_REST, options).pipe(retry(3), catchError(this.handError));//, tap( re => {console.log(re.body);}));
  }

  /**
   * @description handing Errors (better using HttpClient interceptors)
   *
   * @param {HttpErrorResponse} anError - we have recieved it
   * @returns {Observable<any>}
   * @memberof SrvfirstroshamboService
   */
  handError(anError: HttpErrorResponse): Observable<any> {
    let errMsg: string = 'None';

    // Yes, there is an error from client
    if (anError.error instanceof ErrorEvent) {
      // tell me
      errMsg = `Error: ${anError.error.message}`;
    } else {
      // No, error comes from server
      errMsg = `Server error: ${anError.status}\nMessage: ${anError.message}`;
    }

    console.log(`Has been an error -> ${errMsg}`);

    return throwError(errMsg);
  }

}
