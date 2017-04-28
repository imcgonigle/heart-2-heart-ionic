import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmojiGamePage } from './emoji-game';

@NgModule({
  declarations: [
    EmojiGamePage,
  ],
  imports: [
    IonicPageModule.forChild(EmojiGamePage),
  ],
  exports: [
    EmojiGamePage
  ]
})
export class EmojiGameModule {}
