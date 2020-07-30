import { Component, OnInit, Input } from '@angular/core';
import { ClassRepoMove } from '../../classes/class-repo-move';
import { Enumresult } from '../../enums/enumresult.enum';
import { Enummove } from '../../enums/enummove.enum';

/**
 * @description Component for showing results
 *
 * @export ComptableComponent
 * @class ComptableComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-comptable',
  templateUrl: './comptable.component.html',
  styleUrls: ['./comptable.component.css']
})
export class ComptableComponent implements OnInit {

  @Input()
  results: ClassRepoMove;

  constructor() { }

  ngOnInit(): void {
  }

  getStringMove(a: Enummove): string {
    return Enummove[a];
  }

  getStringResult(a: Enumresult): string {
    return Enumresult[a];
  }

}
