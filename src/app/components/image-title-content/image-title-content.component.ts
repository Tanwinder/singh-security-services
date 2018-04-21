import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-title-content',
  templateUrl: './image-title-content.component.html',
  styleUrls: ['./image-title-content.component.scss']
})
export class ImageTitleContentComponent implements OnInit {
  @Input() content:any = {};
  imagesrc: string = '';
  title: string = '';
  para: string = '';
  constructor() { }

  ngOnInit() {
    this.imagesrc = this.content.src;
    this.title = this.content.title;
    this.para = this.content.para;
  }

}
