import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comprestart',
  templateUrl: './comprestart.component.html',
  styleUrls: ['./comprestart.component.css']
})
export class ComprestartComponent implements OnInit {

  @Output()
  askRestart = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  restartPlayed() {
    this.askRestart.emit(true);
  }

}
