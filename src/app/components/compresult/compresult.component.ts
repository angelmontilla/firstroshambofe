import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compresult',
  templateUrl: './compresult.component.html',
  styleUrls: ['./compresult.component.css']
})
export class CompresultComponent implements OnInit {

  @Input()
  image: number;

  actualImage: string[] = ['../../../assets/svgs/rockwins.svg',
                           '../../../assets/svgs/rockloses.svg',
                           '../../../assets/svgs/paperwins.svg',
                           '../../../assets/svgs/paperloses.svg',
                           '../../../assets/svgs/scissorwins.svg',
                           '../../../assets/svgs/scissorloses.svg',
                          ''];

  constructor() { }

  ngOnInit(): void {
    if (this.image === undefined) {
      this.image = 6;
    }
  }

}
