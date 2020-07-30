import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Enummove } from '../../enums/enummove.enum';

@Component({
  selector: 'app-compselector',
  templateUrl: './compselector.component.html',
  styleUrls: ['./compselector.component.css']
})
export class CompselectorComponent implements OnInit {

  @Input()
  state: number;

  @Output()
  selected = new EventEmitter<number>();

  constructor() { }

  /**
   * @description state now is correct at begining
   *
   * @memberof CompselectorComponent
   */
  ngOnInit(): void {
    if (this.state === undefined) {
      this.state = 3;
    }
  }

  /**
   * @description preserves new selection and emit notification
   *
   * @param {number} value new option selected
   * @memberof CompselectorComponent
   */
  selectedOpcion(value: number) {
    this.state = value;
    this.selected.emit(value);
  }

}
