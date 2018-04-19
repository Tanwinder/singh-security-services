import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  image: string = 'https://s3.amazonaws.com/uscx-media/houses321/hp2/slides/slide-1.jpg';
  constructor() { }

  ngOnInit() {
  }

}
