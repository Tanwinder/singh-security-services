import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent implements OnInit {
  navs: any = [
    {name: 'Home', routerlink: '/home',navclass: 'mobile-nav'},
    {name: 'Commercial', routerlink: '/commercial', navclass: 'mobile-nav'},
    {name: 'Residential', routerlink: '/residential', navclass: 'mobile-nav'},
    {name: 'Services', routerlink: '/services', navclass: 'mobile-nav'},
    {name: 'About', routerlink: '/about', navclass: 'mobile-nav'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
