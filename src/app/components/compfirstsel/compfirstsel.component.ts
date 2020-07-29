import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compfirstsel',
  templateUrl: './compfirstsel.component.html',
  styleUrls: ['./compfirstsel.component.css']
})
export class CompfirstselComponent implements OnInit {

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
