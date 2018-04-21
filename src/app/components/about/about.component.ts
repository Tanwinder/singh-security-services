import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  arrData: any = {
    image: '../../../assets/images/about.jpg',
    content: {
      title: 'ABOUT US | YOUR LOCAL HOME AND BUSINESS SECURITY FIRM IN CALGARY',
      description: '',
      fontsize: '2.7em',
      width: '60vw',
      divheight: '88'   //send only number like 80 ,30 etc dont punt % or vh
    }
  }
  fourColumnContent: any = [
    {
      src: '../../../assets/images/about-symbol1.png',
      title: 'About',
      para: 'Singh Security Services, located in North-East Calgary, CANADA, is a locally owned and operated full-service security company. We provide a range of high-quality solutions including alarm systems, fire alarms, camera surveillance and more.'
    },
    {
      src: '../../../assets/images/specialize.png',
      title: 'Specialize',
      para: 'Singh Security Services, located in North-East Calgary, CANADA, is a locally owned and operated full-service security company. We provide a range of high-quality solutions including alarm systems, fire alarms, camera surveillance and more.'
    },
    {
      src: '../../../assets/images/history.png',
      title: 'History',
      para: 'Singh Security Services, located in North-East Calgary, CANADA, is a locally owned and operated full-service security company. We provide a range of high-quality solutions including alarm systems, fire alarms, camera surveillance and more.'
    },
    {
      src: '../../../assets/images/today.png',
      title: 'Today',
      para: 'Singh Security Services, located in North-East Calgary, CANADA, is a locally owned and operated full-service security company. We provide a range of high-quality solutions including alarm systems, fire alarms, camera surveillance and more.'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
