import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.scss']
})
export class ResidentialComponent implements OnInit {
  a: any = {
    classvalue: 'fullwidth',
    heading: 'Residential Solutions',
    paragraph: 'Make sure that your home is safe, secure and comfortable with our interactive security systems. With the help of real-time alerts, video viewing, GPS tracking and mobile controls – you can stay connected to your home and your family 24/7!'
  };

  data: any = [
    {
      header: 'Garage Doors',
      imagesrc: '../../../assets/images/garage-door.jpg',
      paragraph: 'Garage doors that know when to open and close. If you forget to close it, but are away from home, the system will let you know and ask for your action/non-action: leave it open or close. If you leave it open in the evening, system will ask you to close it for the night of leave open.',
      imageclass: 'image-content small-image'
    },
    {
      header: 'Security Cameras',
      imagesrc: '../../../assets/images/security-cameras.jpg',
      paragraph: 'Keep your eye on what is beautiful to you. Put the criminals where they belong. Put the cameras in strategic places inside and outside your residence, cabin, vacation home. Our advanced technology has High Resolution security surveillance cameras, both wired and wireless.',
      imageclass: 'image-content small-image left'
    },
    {
      header: 'Door Alarm',
      imagesrc: '../../../assets/images/door-alarm.jpg',
      paragraph: 'Door chime works great when you are at home. When asleep, or just wanting protection, you activate the door alarms. Door alarm takes over when you are gone. Combined with other components, you residential security system can really be a life and property saver and your home can be really well protected.',
      imageclass: 'image-content small-image'
    },
    {
      header: 'Door Hardening',
      imagesrc: '../../../assets/images/home2.jpg',
      paragraph: 'The most common entry for burglars is your front door. Once you have video monitoring setup, it is wise to harden the doorways against kicks. We have the hardware, skill and experience. ',
      imageclass: 'image-content small-image left '
    },
    {
      header: 'Smart Door Locks',
      imagesrc: '../../../assets/images/Smart-Home-Door-Lock.jpg',
      paragraph: 'You can establish a connection to your Smart lock at all times. You can use a keypad on the lock itself, a fob on your keychain for touchless operation, or Android or iOS app with one our cloud-based integrated remote access and management solutions.',
      imageclass: 'image-content small-image'
    },
    {
      header: 'Doorbell Cameras',
      imagesrc: '../../../assets/images/doorbell-cameras.jpeg',
      paragraph: 'As if you were always at home. Like a bellboy-robot, but fancier. Someone approaches your door, doorbell camera engages and sends you an alert via mobile app. You can see who came to your house, talk to them and, with a push of a button, send an unlock signal to the smart door lock. That is smart.',
      imageclass: 'image-content small-image left'
    },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
