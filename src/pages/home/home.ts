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
      title: 'Happy'
    },
    relaxing: {
      title: 'Relaxing'
    },
    satisfying: {
      title: 'Satisfying'
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
