import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Enummove } from '../../enums/enummove.enum';

@Component({
  selector: 'app-compselector',
  templateUrl: './compselector.component.html',
  styleUrls: ['./compselector.component.css']
})
export class CompselectorComponent implements OnInit, OnChanges {

  @Input()
  state: number;

  @Output()
  selected = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('algo ha cambiado');
  }

  ngOnInit(): void {
    if (this.state === undefined) {
      this.state = 3;
    }
  }

  selectedOpcion(value: number) {
    this.state = value;
    this.selected.emit(value);
  }

}
