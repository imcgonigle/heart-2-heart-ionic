import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmotionProvider } from '../../providers/emotion.provider';

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
  providers: [EmotionProvider]
})
export class VideoPlayerPage {
  video: any;
  videoIndex: number;
  emotion: string;
  videos: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public emotionService: EmotionProvider
  ) {
    this.video = navParams.get('video');
    this.videoIndex = navParams.get('videoIndex');
    this.emotion = navParams.get('emotion');
    this.videos = this.emotionService.getEmotion(this.emotion)['videos'];
  }

  ionViewDidLoad() {}

  gotoNextVideo(): void{
    let nextVideo = this.videos[++this.videoIndex];
    this.video = nextVideo;
  }

  gotoPreviousVideo(): void{
    let previousVideo = this.videos[--this.videoIndex];
    this.video = previousVideo;
  }

}
