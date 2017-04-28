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
        {title: 'The Beach', imageUrl: 'assets/images/emojis-128/sour.png'},
        {title: 'Family', imageUrl: 'assets/images/emojis-128/clown.png'},
        {title: 'Dancing', imageUrl: 'assets/images/emojis-128/cat-happy-tears.png'}
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
        {title: 'Dogs Sleeping', imageUrl: 'assets/images/emojis-128/drooling.png'},
        {title: 'Mattress Sale', imageUrl: 'assets/images/emojis-128/eyes-closed.png'},
        {title: 'Boat on the Ocean', imageUrl: 'assets/images/emojis-128/inhale.png'}
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
        {title: 'Space Ship', imageUrl: 'assets/images/emojis-128/laughing-tears-tilted.png'},
        {title: 'Cakes', imageUrl: 'assets/images/emojis-128/silly.png'},
        {title: 'Art', imageUrl: 'assets/images/emojis-128/smile-upsidedown.png'},
        {title: 'Parachuting', imageUrl: 'assets/images/emojis-128/tongue-out-winking.png'}
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
