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
        {title: 'Dog Playing', thumbnailUrl: 'assets/images/videos/happy/1.jpeg'},
        {title: 'Baby Laughing', thumbnailUrl: 'assets/images/videos/happy/2.jpeg'},
        {title: 'Roller Coaster', thumbnailUrl: 'assets/images/videos/happy/3.jpeg'},
        {title: 'Christmas Party', thumbnailUrl: 'assets/images/videos/happy/4.jpeg'}
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
        {title: 'Floating on Clouds', thumbnailUrl: 'assets/images/videos/relaxing/1.jpeg'},
        {title: 'The Waves Crashing', thumbnailUrl: 'assets/images/videos/relaxing/2.jpeg'},
        {title: 'A Pond', thumbnailUrl: 'assets/images/videos/relaxing/3.jpeg'},
        {title: 'Floating Through Space', thumbnailUrl: 'assets/images/videos/relaxing/4.jpeg'},
        {title: 'Bob Ross', thumbnailUrl: 'assets/images/videos/relaxing/5.jpeg'}
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
        {title: 'Cutting the Cake', thumbnailUrl: 'assets/images/videos/satisfying/1.jpeg'},
        {title: 'Skateboard Tricks', thumbnailUrl: 'assets/images/videos/satisfying/2.jpeg'},
        {title: 'Sports Highlights', thumbnailUrl: 'assets/images/videos/satisfying/3.jpeg'},
        {title: 'Magic Tricks', thumbnailUrl: 'assets/images/videos/satisfying/4.jpeg'}
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
