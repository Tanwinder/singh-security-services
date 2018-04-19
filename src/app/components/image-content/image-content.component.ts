import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-content',
  templateUrl: './image-content.component.html',
  styleUrls: ['./image-content.component.scss']
})
export class ImageContentComponent implements OnInit {
  @Input() header: string;
  @Input() paragraph: string;
  @Input() imagesrc: string;
  @Input() imageclass: string;

  constructor() { }

  ngOnInit() {
  }

}
