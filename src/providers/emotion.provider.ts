import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
      imageUrl: 'assets/images/emojis-128/robot.png',
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
      imageUrl: 'assets/images/emojis-128/happy-hands.png',
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

  constructor(public http: Http) {
    console.log('Hello Emotion Provider');
  }

  getEmotions(): any[] {
    return this.emotions;
  }

  getEmotion(emotionKey: string): any{
    return this.emotions[emotionKey];
  }

}
