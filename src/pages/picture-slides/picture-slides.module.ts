import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PictureSlidesPage } from './picture-slides';

@NgModule({
  declarations: [
    PictureSlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(PictureSlidesPage),
  ],
  exports: [
    PictureSlidesPage
  ]
})
export class PictureSlidesModule {}
