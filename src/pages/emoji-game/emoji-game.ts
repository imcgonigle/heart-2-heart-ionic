import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamePage } from './game/game';

/**
 * Generated class for the EmojiGame page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-emoji-game',
  templateUrl: 'emoji-game.html',
})
export class EmojiGamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  goback(): void {
    this.navCtrl.pop();
  }

  startGame(): void {
    console.log('starting game!')
    this.navCtrl.push(GamePage);
  }
}
