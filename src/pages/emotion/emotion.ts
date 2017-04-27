import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Emotion page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-emotion',
  templateUrl: 'emotion.html',
})
export class EmotionPage {
  private mediaType: string = "videos";
  private emotion: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.emotion = navParams.get('emotion');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Emotion');
  }

}
