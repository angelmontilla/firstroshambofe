import { Component, OnInit } from '@angular/core';
import { ClassRepoMove } from './classes/class-repo-move';
import { ClassMove } from './classes/class-move';
import { Enummove } from './enums/enummove.enum';
import { Enumresult } from './enums/enumresult.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angel - First';

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

  // Component Selected
  stateSelection: number = 3;

  // Component Your choice
  stateSelAfterPlay: number = 3;
  // Other player choice
  stateSelAftPlyScnd: number = 3;
  // Game Result
  stateGameResult: number = 6;


  // Btn play methods
  /**
   * <b>changePlayMode</b>
   * <ul>
   * <li>change play button status to inactivated</li>
   * <li>
   * <li>
   * </ul>
   */
  changePlayMode(newStatus: number) {
    if (this.statusPlay == 1) {
      this.statusPlay = 0; // Play unactivated
      //console.log('Si hemos presionado play con seleccion ' + this.stateSelection);

      this.stateSelAfterPlay = this.stateSelection;
      this.stateSelAftPlyScnd = (Math.floor(Math.random() * 3));

      this.listMovements.addResult(new ClassMove(Enummove[this.stateSelection], Enummove[this.stateSelAfterPlay], Enumresult[2]));

      // Restore view status to original
      this.stateGameResult = 6;
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
    this.stateGameResult = 6; // Still no result
    this.stateSelection = event;
  }

  // APPLICATION LOGIC

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

}
