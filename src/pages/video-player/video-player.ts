import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VideoPlayer page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html',
})
export class VideoPlayerPage {
  video: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.video = navParams.get('video');
  }

  ionViewDidLoad() {
    console.log(this.video.title);
  }

  nextVideo(): void{
    console.log('Go to next video');
  }

  previousVideo(): void{
    console.log('Go to previous video');

  }

}
