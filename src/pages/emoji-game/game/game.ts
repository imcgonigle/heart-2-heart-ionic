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
    'assets/images/emojis-128/blow-kiss.png',
    'assets/images/emojis-128/blow.png',
    'assets/images/emojis-128/blushing.png',
    'assets/images/emojis-128/cat-angry.png',
    'assets/images/emojis-128/cat-happy-tears.png',
    'assets/images/emojis-128/cat-happy-eyes.png',
    'assets/images/emojis-128/cat-shocked.png',
    'assets/images/emojis-128/cat-smirk.png',
    'assets/images/emojis-128/cat-tear.png',
    'assets/images/emojis-128/cat-whistle.png',
    'assets/images/emojis-128/clown.png',
    'assets/images/emojis-128/cool.png',
    'assets/images/emojis-128/cowboy.png',
    'assets/images/emojis-128/crying-tears.png',
    'assets/images/emojis-128/crying.png',
    'assets/images/emojis-128/devil.png',
    'assets/images/emojis-128/displeased.png',
    'assets/images/emojis-128/down.png',
    'assets/images/emojis-128/drooling.png',
    'assets/images/emojis-128/excited.png',
    'assets/images/emojis-128/eyes-closed.png',
    'assets/images/emojis-128/frown-long.png',
    'assets/images/emojis-128/frown.png',
    'assets/images/emojis-128/happy-cat.png',
    'assets/images/emojis-128/happy-hands.png',
  ]
  startInSeconds: number = 3;
  isGameStarted: boolean = false;
  currentEmojiIndex: number = 0;

  options: number[] = [ 0, 0, 0, 0];
  playersPoints: number = 0;

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
    this.isGameStarted = true;
    this.newRound();
  }

  changeOptions(): void {
    this.options = [this.currentEmojiIndex];
    while (this.options.length < 4) {
      let randomNumber = Math.floor(Math.random() * this.emojis.length);
      if (this.options.indexOf(randomNumber) < 0) {
        this.options.push(randomNumber);
      }
    }
    this.options = this.shuffle(this.options);
  }

  shuffle(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue: any;
    let randomIndex: number;

    while(currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);

      currentIndex -= 1;
      temporaryValue = array[currentIndex];

      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  newRound():void {
    this.currentEmojiIndex = Math.floor(Math.random() * this.emojis.length);
    this.changeOptions();
  }

  optionSelected(index: number) {
    if(this.currentEmojiIndex === index) {
      this.playersPoints += 1;
    }
    this.newRound();
  }
}
