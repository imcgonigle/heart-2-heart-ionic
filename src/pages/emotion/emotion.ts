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
  private title: string;
  private mediaType: string = "videos";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Emotion');
  }

}
