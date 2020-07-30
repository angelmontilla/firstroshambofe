import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SrvfirstroshamboService {

  private URL_REST: string = 'http://localhost:8080/roshambo/playround';

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
  public askGetPlay() {
    return this.client.get(this.URL_REST);
  }

}
