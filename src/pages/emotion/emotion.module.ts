import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Emotion } from './emotion';

@NgModule({
  declarations: [
    Emotion,
  ],
  imports: [
    IonicPageModule.forChild(Emotion),
  ],
  exports: [
    Emotion
  ]
})
export class EmotionModule {}
