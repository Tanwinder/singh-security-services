import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.scss']
})
export class BackgroundImageComponent implements OnInit {
  @Input() image:string;
  @Input() width:string;
  @Input() height:string;
  imageurl = '';
  
  constructor() { }

  ngOnInit() {
    this.imageurl = `url(${this.image})`;
  }

}
