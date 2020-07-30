import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClassRepoMove } from './classes/class-repo-move';
import { ClassMove } from './classes/class-move';
import { Enummove } from './enums/enummove.enum';
import { Enumresult } from './enums/enumresult.enum';
import { SrvfirstroshamboService } from './services/srvfirstroshambo.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  // this is not the title
  title = 'Angel - First';

  // Score table
  listMovements: ClassRepoMove = new ClassRepoMove();

  // Title header information
  imgTitulo: string[] = ['../../../assets/svgs/title.svg',
                        'Roshambo',
                        'You are playing Rock, Paper, Scissors'];

  // Btn play images information
  imgPlay: string[] = ['../../../assets/svgs/btnplayu.svg',
                       '../../../assets/svgs/btnplay.svg'];
  // Btn play status unactivated
  statusPlay: number = 0;
  rondNbr: number = 0;

  // Component Selected
  stateSelection: number = 3;

  // Component Your choice
  stateSelAfterPlay: number = 3;
  // Other player choice
  stateSelAftPlyScnd: number = 3;
  // Game Result
  stateGameResult: number = 9;


  // Final result
  theFinalResult: string;

  // Service treatment
  private kills$: Subject<boolean> = new Subject<boolean>();


  // Btn play methods
  /**
   * @description Has pressed play btn
   *
   * @param {number} newStatus
   * @memberof AppComponent
   */
  changePlayMode(newStatus: number) {
    if (this.statusPlay === 1) {
      this.statusPlay = 0; // Play unactivated

      this.stateSelAfterPlay = this.stateSelection;
      this.stateSelAftPlyScnd = (Math.floor(Math.random() * 3));

      // lets ask server
      const first: string = Enummove[this.stateSelAfterPlay].toUpperCase();
      const second: string = Enummove[this.stateSelAftPlyScnd].toUpperCase();

      this.service.askGetPlay(first, second).pipe(takeUntil(this.kills$)).subscribe((res: HttpResponse<any>)  => {
        console.log ('DENTRO -> ' + res.body.roundResult);
        this.theFinalResult = res.body.roundResult;
        // Preserve score
        this.listMovements.addResult(new ClassMove(this.stateSelAfterPlay, this.stateSelAftPlyScnd, Enumresult[this.theFinalResult]));
        this.stateGameResult = 3 * this.stateSelAfterPlay + Enumresult[this.theFinalResult];
      });


      // Restore view status to original
      this.rondNbr = this.listMovements.listMoves.length;
      
      this.stateSelection = 3;
    }
  }

  // COMPONENT SELECTED LOGIG

  /**
   * <b>moveSelected</b>
   */
  moveSelected(event: number) {
    this.statusPlay = 1; // Play activated
    this.stateSelAfterPlay = 3; // No move still
    this.stateSelAftPlyScnd = 3; // Still no move
    this.stateGameResult = 9; // Still no result
    this.stateSelection = event;
  }

  // RESTART REQUEST
  clear(confirm: boolean) {
    this.listMovements.remove(true);
    this.stateSelAfterPlay = 3; // No move still
    this.stateSelAftPlyScnd = 3; // Still no move
    this.stateGameResult = 9; // Still no result
  }

  // APPLICATION LOGIC

  /**
   * Creates an instance of AppComponent.
   * <p>You have done dependency inyection</p>
   * @param {SrvfirstroshamboService} service
   * @memberof AppComponent
   */
  constructor(private service: SrvfirstroshamboService) {

  }

  /**
   * <b>ngOnInit</b> Initial status
   */
  ngOnInit(): void {
    if (this.stateSelection === undefined) {
      this.stateSelection = 3;
    }
    if (this.stateSelAfterPlay === undefined) {
      this.stateSelAfterPlay = 3;
    }
    if (this.stateSelAftPlyScnd === undefined) {
      this.stateSelAftPlyScnd = 3;
    }
    if (this.stateGameResult === undefined) {
      this.stateGameResult = 6;
    }

  }

  /**
   * @description let's done it well
   *
   * @memberof AppComponent
   */
  ngOnDestroy(): void {
    // get last data if exist
    this.kills$.next(true);

    // removing subscription it's a good practice
    this.kills$.unsubscribe();    
  }

}
