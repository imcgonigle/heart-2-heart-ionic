import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EmotionPage } from '../emotion/emotion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  emotions: any = {
    happy: {
      title: 'Happy',
      greeting: 'Check out some of the videos and pictures on this page. They\'re sure to brighten your day.',
      videos: [
        {title: 'Dog Playing'},
        {title: 'Baby Laughing'},
        {title: 'Roller Coaster'},
        {title: 'Christmas Party'}
      ],
      pictures: [
        {title: 'The Beach'},
        {title: 'Family'},
        {title: 'Dancing'}
      ]
    },
    relaxing: {
      title: 'Relaxing',
      greeting: 'If you\'re trying to relax then you\'ve come to the right place.',
      videos: [
        {title: 'Floating on Clouds'},
        {title: 'The Waves Crashing'},
        {title: 'A Pond'},
        {title: 'Floating Through Space'},
        {title: 'Bob Ross'}
      ],
      pictures: [
        {title: 'Dogs Sleeping'},
        {title: 'Mattress Sale'},
        {title: 'Boat on the Ocean'}
      ]
    },
    satisfying: {
      title: 'Satisfying',
      greeting: 'You\'re sure to be satisfied after taking a look at the stuff we have for you here.',
      videos: [
        {title: 'Cutting the Cake'},
        {title: 'Skateboard Tricks'},
        {title: 'Sports Highlights'},
        {title: 'Magic Tricks'}
      ],
      pictures: [
        {title: 'Space Ship'},
        {title: 'Cakes'},
        {title: 'Art'},
        {title: 'Parachuting'}
      ]
    }
  }

  constructor(public navCtrl: NavController) {

  }
  gotoEmotion(emotion: string): void {
    this.navCtrl.push(EmotionPage, {
      emotion: this.emotions[emotion]
    });
  }
}
