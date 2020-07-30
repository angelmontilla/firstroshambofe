import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compbtnplay',
  templateUrl: './compbtnplay.component.html',
  styleUrls: ['./compbtnplay.component.css']
})
export class CompbtnplayComponent implements OnInit {

  @Input()
  images: string[];

  @Input()
  status: number;

  @Input()
  roundNumber: number;

  @Output()
  playMove = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
    if (this.status === undefined) {
      this.status = 0;
    }
    if (this.roundNumber === undefined) {
      this.roundNumber = 0;
    }
  }

  /**
   * @description play action required
   *
   * @memberof CompbtnplayComponent
   */
  playClicked() {
    this.playMove.emit(this.status);
  }

}
