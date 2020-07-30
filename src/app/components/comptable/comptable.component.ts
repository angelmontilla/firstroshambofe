import { Component, OnInit, Input } from '@angular/core';
import { ClassRepoMove } from '../../classes/class-repo-move';

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

}
