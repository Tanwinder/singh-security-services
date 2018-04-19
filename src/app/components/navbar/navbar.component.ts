import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
navs: any = [
  {name: 'Home', routerlink: '/home',navclass: 'nav'},
  {name: 'Commercial', routerlink: '/commercial', navclass: 'nav'},
  {name: 'Residential', routerlink: '/residential', navclass: 'nav'},
  {name: 'Services', routerlink: '/services', navclass: 'nav'},
  {name: 'About', routerlink: '/about', navclass: 'nav'},
];
  constructor() { }

  ngOnInit() {
  }

}
