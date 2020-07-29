import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstroshambo';

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
    this.statusPlay = 0; // Play unactivated
    //console.log('Si hemos presionado play con seleccion ' + this.stateSelection);

    this.stateSelection = 3;
  }

  // Component Selected methods
  moveSelected(event: number) {
    this.statusPlay = 1; // Play activated
    this.stateSelection = event;
  }


}
