import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EmotionService } from '../../services/emotion.service';

import { PictureSlidesPage } from '../picture-slides/picture-slides';
import { VideoPlayerPage } from '../video-player/video-player';

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
  providers:[EmotionService]
})
export class EmotionPage {
  private mediaType: string;
  private emotion: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private emotionService: EmotionService
  ) {
    this.emotion = this.emotionService.getEmotion(this.navParams.get('emotion'));
    this.mediaType = 'videos';
  }

  ionViewDidLoad() {}

  showSlides(pictures: any[], index): void {
    this.navCtrl.push(PictureSlidesPage, {
      pictures: pictures,
      startSlide: index + 1
    });
  }

  playVideo(video: any, videoIndex: any): void {
    this.navCtrl.push(VideoPlayerPage, {
      video: video,
      videoIndex: videoIndex,
      emotion: this.navParams.get('emotion'),
      maxIndex: this.emotion['videos'].length - 1
    });
  }

}
