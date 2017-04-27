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
      greeting: 'Check out some of the videos and pictures on this page. They\'re sure to brighten your day.'
    },
    relaxing: {
      title: 'Relaxing',
      greeting: 'If you\'re trying to relax then you\'ve come to the right place.'
    },
    satisfying: {
      title: 'Satisfying',
      greeting: 'You\'re sure to be satisfied after taking a look at the stuff we have for you here.'
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
