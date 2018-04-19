import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  navs: any = [
    {name: 'Home', routerlink: '/home', navclass: 'footer-nav'},
    {name: 'Commercial', routerlink: '/commercial', navclass: 'footer-nav'},
    {name: 'Residential', routerlink: '/residential', navclass: 'footer-nav'},
    {name: 'Services', routerlink: '/services', navclass: 'footer-nav'},
    {name: 'About', routerlink: '/about', navclass: 'footer-nav'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
