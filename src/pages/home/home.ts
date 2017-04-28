import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EmotionPage } from '../emotion/emotion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoEmotion(emotion: string): void {
    this.navCtrl.push(EmotionPage, {
      emotion: emotion
    });
  }
}
