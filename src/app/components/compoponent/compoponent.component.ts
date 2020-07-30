import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compoponent',
  templateUrl: './compoponent.component.html',
  styleUrls: ['./compoponent.component.css']
})
export class CompoponentComponent implements OnInit {

  @Input()
  image: number;

  actualImage: string[] = ['../../../assets/svgs/rockmove.svg',
                           '../../../assets/svgs/papermove.svg',
                           '../../../assets/svgs/scissorsmove.svg',
                          ''];


  constructor() { }

  ngOnInit(): void {
    if (this.image === undefined) {
      this.image = 3;
    }
  }

}
