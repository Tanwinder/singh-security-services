import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.scss']
})
export class BackgroundImageComponent implements OnInit {
  heightValue = (val, dividend)=> {
    let value = Number(val);
    return value/dividend+ 'vh';
  }
  @Input() arrData:any;
  imageurl = '';
  title = '';
  desc = '';
  titleWidth = '';
  fontsize = '';
  divheight= '';
  height= '';
  padding = '';
  constructor() { }

  ngOnInit() {
    this.imageurl = `url(${this.arrData.image})`;
    this.title = this.arrData.content.title;
    this.desc = this.arrData.content.description;
    this.titleWidth = this.arrData.content.width;
    this.fontsize = this.arrData.content.fontsize;
    this.divheight = this.arrData.content.divheight;
    this.height = this.heightValue(this.divheight,1);
    this.padding = this.heightValue(this.divheight,2.8);
  }

}
