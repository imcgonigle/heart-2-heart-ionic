import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmotionPage } from './emotion';

@NgModule({
  declarations: [
    EmotionPage,
  ],
  imports: [
    IonicPageModule.forChild(EmotionPage),
  ],
  exports: [
    EmotionPage
  ]
})
export class EmotionModule {}
