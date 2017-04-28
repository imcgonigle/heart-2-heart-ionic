import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmojiGame page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  emojis: any[] = [
    'assets/images/emoji-128/blow-kiss.png',
    'assets/images/emoji-128/blow.png',
    'assets/images/emoji-128/blushing.png',
    'assets/images/emoji-128/cat-angry.png',
    'assets/images/emoji-128/cat-happy-tears.png',
    'assets/images/emoji-128/cat-happy-eyes.png',
    'assets/images/emoji-128/cat-shocked.png',
    'assets/images/emoji-128/cat-smirk.png',
    'assets/images/emoji-128/cat-tear.png',
    'assets/images/emoji-128/cat-whistle.png',
    'assets/images/emoji-128/clown.png',
    'assets/images/emoji-128/cool.png',
    'assets/images/emoji-128/cowboy.png',
    'assets/images/emoji-128/crying-tears.png',
    'assets/images/emoji-128/crying.png',
    'assets/images/emoji-128/devil.png',
    'assets/images/emoji-128/displeased.png',
    'assets/images/emoji-128/down.png',
    'assets/images/emoji-128/drooling.png',
    'assets/images/emoji-128/excited.png',
    'assets/images/emoji-128/eyes-closed.png',
    'assets/images/emoji-128/frown-long.png',
    'assets/images/emoji-128/frown.png',
    'assets/images/emoji-128/happy-cat.png',
    'assets/images/emoji-128/happy-hands.png',
  ]

  startInSeconds: number = 3;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.countDownToStartGame();
  }

  countDownToStartGame(): void {
    setTimeout(() => {
      this.startInSeconds = 2;
    }, 1000)

    setTimeout(() => {
      this.startInSeconds = 1;
    }, 2000)

    setTimeout(() => {
      this.startInSeconds = 0;
    }, 3000)

    setTimeout(() => {
      this.startGame();
    }, 3500)
  }

  startGame(): void {
    console.log("Starting Game.");
  }
}
