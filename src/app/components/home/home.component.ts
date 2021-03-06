import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  a: any = {
    classvalue: 'fullwidth full',
    heading: 'Singh Security Services',
    paragraph: 'Singh Security is the leader in home security, helping to protect your home and family with our monitored alarm systems and other home security products. Browse our home alarm and automation products to find the perfect system for your home.'
  };
  data: any = [
    {
      header: 'Home Security',
      imagesrc: 'http://securitycompanies.co/wp-content/uploads/2017/08/Best-and-Most-Affordable-Home-Security-System-in-2017.jpg',
      paragraph: 'Protect your home and family with our advanced home security monitoring systems.',
      imageclass: 'image-double'
    },
    {
      header: 'Security Cameras',
      imagesrc: 'https://i.ytimg.com/vi/nlHBaO7I9tw/maxresdefault.jpg',
      paragraph: 'Whether you are shopping, on vacation or at work, high definition security cameras let you view and hear live video streaming on your computer or mobile device.',
      imageclass: 'image-double'
    },
    {
      header: 'Home Automation',
      imagesrc: '../../../assets/images/HOme-automation4.jpeg',
      paragraph: 'We are home automation experts – Access your security system, lights, thermostat, etc. through your smart phone',
      imageclass: 'image-double'
    },
    {
      header: 'Burglary Alarm Systems',
      imagesrc: 'http://mce-engineering.com/wp-content/uploads/2017/02/NEC-VoIP-Phone-Systems1.jpg',
      paragraph: 'Interactive Alarm Systems with remote mobile access and full notifications',
      imageclass: 'image-double'
    },
    {
      header: 'Fire, Smoke & Heat',
      imagesrc: 'http://www.safetysolutions.in/images/smoke.jpg',
      paragraph: 'When every second counts, sensors throughout your home instantly alert our monitoring centers in the event of a fire or gas leak.',
      imageclass: 'image-double last'
    },
    {
      header: 'Structured Cabling',
      imagesrc: 'http://www.pci-fla.com/technology-services/structured-cabling/structured-cabling.png',
      paragraph: 'Structured Cabling is the core element of the corporate network',
      imageclass: 'image-double'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
