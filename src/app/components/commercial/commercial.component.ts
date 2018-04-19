import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {
  a: any = {
    classvalue: 'fullwidth',
    heading: 'Commercial Solutions',
    paragraph: 'Perhaps your store got burglarized, your shop had an intrusion. Or maybe you’ve seen some suspicious activity around your area. Singh Security Services can help you with security protection.'
  };

  data: any = [
    {
      header: 'Commercial Fire Alarms',
      imagesrc: '../../../assets/images/fire-alarms.jpg',
      paragraph: 'Detect fire before it destroys your business. Detect heat, smoke and CO before it they kill your people.',
      imageclass: 'image-content small-image left'
    },
    {
      header: 'Commercial Doorbell Cameras',
      imagesrc: '../../../assets/images/commercial-doorbell.jpg',
      paragraph: 'As if you were always at office front door. Like a 24/7 guard, but fancier. Someone approaches your door, doorbell camera engages and sends you an alert via mobile app. You can see who came to your house, talk to them and, with a push of a button, send an unlock signal to the smart door lock. That is smart!',
      imageclass: 'image-content small-image'
    },
    {
      header: 'Commercial Security Cameras',
      imagesrc: '../../../assets/images/security-cameras.jpg',
      paragraph: 'Put the cameras in strategic places to keep an eye on your business assets, employees, deliveries, and processes. Our cameras have capability to record in total darkness, be autonomous for several years (motion-activated, battery-powered), and with advanced software,  -- recognize motion direction, and count customers.',
      imageclass: 'image-content small-image left'
    },
    {
      header: 'Gates and Garage Doors',
      imagesrc: '../../../assets/images/garage-door.jpg',
      paragraph: 'Do you keep your vehicles inside the fenced lot, garage? -- protect your investment with flexible and affordable access control solution from OnGuard Security.',
      imageclass: 'image-content small-image'
    },
    {
      header: 'Door Locks',
      imagesrc: '../../../assets/images/Smart-Home-Door-Lock.jpg',
      paragraph: 'Smart lock connected to you at all times. You can use a keypad on the lock itself, a fob on your key chain for touchless operation, or Android or iOS app with one our cloud-based integrated remote access and management solution',
      imageclass: 'image-content small-image left'
    },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
