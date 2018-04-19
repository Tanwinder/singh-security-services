import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-width',
  templateUrl: './full-width.component.html',
  styleUrls: ['./full-width.component.scss']
})
export class FullWidthComponent implements OnInit {
  @Input() heading: string;
  @Input() paragraph: string;
  @Input() classvalue: string;
  constructor() { }

  ngOnInit() {
  }

}
