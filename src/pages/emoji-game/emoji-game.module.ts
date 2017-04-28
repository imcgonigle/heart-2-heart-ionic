import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmojiGame } from './emoji-game';

@NgModule({
  declarations: [
    EmojiGame,
  ],
  imports: [
    IonicPageModule.forChild(EmojiGame),
  ],
  exports: [
    EmojiGame
  ]
})
export class EmojiGameModule {}
