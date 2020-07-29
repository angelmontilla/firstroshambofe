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

  @Output()
  playMove = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
    if (this.status === undefined) {
      this.status = 0;
    }
  }

  /**
   * <b>playClicked</b>
   */
  playClicked() {
    //this.status = (this.status === 0) ? 1 : 0;

    this.playMove.emit(this.status);
  }

}
