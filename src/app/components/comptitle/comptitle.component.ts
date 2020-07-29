import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comptitle',
  templateUrl: './comptitle.component.html',
  styleUrls: ['./comptitle.component.css']
})
export class ComptitleComponent implements OnInit {

  @Input()
  images: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
