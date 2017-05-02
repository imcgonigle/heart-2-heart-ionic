import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { RELAXING_VIDEOS, SATISFYING_VIDEOS, HAPPY_VIDEOS } from '../data/videos.data';

import { HAPPY_PICTURES, RELAXING_PICTURES, SATISFYING_PICTURES } from '../data/pictures.data';

/*
  Generated class for the Emotion provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EmotionProvider {
  emotions: any = {
    happy: {
      title: 'Happy',
      greeting: 'Check out some of the videos and pictures on this page. They\'re sure to brighten your day.',
      imageUrl:'assets/images/emojis-128/cowboy.png',
      videos: HAPPY_VIDEOS,
      pictures: HAPPY_PICTURES
    },
    relaxing: {
      title: 'Relaxing',
      greeting: 'If you\'re trying to relax then you\'ve come to the right place.',
      imageUrl: 'assets/images/emojis-128/robot.png',
      videos: RELAXING_VIDEOS,
      pictures: RELAXING_PICTURES
    },
    satisfying: {
      title: 'Satisfying',
      greeting: 'You\'re sure to be satisfied after taking a look at the stuff we have for you here.',
      imageUrl: 'assets/images/emojis-128/happy-hands.png',
      videos: SATISFYING_VIDEOS,
      pictures: SATISFYING_PICTURES
    }
  }

  constructor(public http: Http) {}

  getEmotions(): any[] {
    return this.emotions;
  }

  getEmotion(emotionKey: string): any{
    return this.emotions[emotionKey];
  }

}
