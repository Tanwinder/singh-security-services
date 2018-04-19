import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-services',
  templateUrl: './security-services.component.html',
  styleUrls: ['./security-services.component.scss']
})
export class SecurityServicesComponent implements OnInit {
  a: any = {
    classvalue: 'fullwidth',
    heading: 'Our Services',
    paragraph: 'We are the best in the area providing Alarm and Security services',
  };

  data: any = [
    {
      header: 'Home Security',
      imagesrc: 'http://securitycompanies.co/wp-content/uploads/2017/08/Best-and-Most-Affordable-Home-Security-System-in-2017.jpg',
      paragraph: 'Protect your home and family with our advanced home security monitoring systems.',
      imageclass: 'image-content left'
    },
    {
      header: 'Security Cameras',
      imagesrc: 'https://i.ytimg.com/vi/nlHBaO7I9tw/maxresdefault.jpg',
      paragraph: 'Whether you are shopping, on vacation or at work, high definition security cameras let you view and hear live video streaming on your computer or mobile device.',
      imageclass: 'image-content'
    },
    {
      header: 'Home Automation',
      imagesrc: '../../../assets/images/HOme-automation4.jpeg',
      paragraph: 'We are home automation experts – Access your security system, lights, thermostat, etc. through your smart phone',
      imageclass: 'image-content left'
    },
    {
      header: 'Burglary Alarm Systems',
      imagesrc: 'http://mce-engineering.com/wp-content/uploads/2017/02/NEC-VoIP-Phone-Systems1.jpg',
      paragraph: 'Interactive Alarm Systems with remote mobile access and full notifications',
      imageclass: 'image-content'
    },
    {
      header: 'Fire, Smoke & Heat',
      imagesrc: 'http://www.safetysolutions.in/images/smoke.jpg',
      paragraph: 'When every second counts, sensors throughout your home instantly alert our monitoring centers in the event of a fire or gas leak.',
      imageclass: 'image-content left'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
