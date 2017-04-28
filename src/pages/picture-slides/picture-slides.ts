import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PictureSlides page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-picture-slides',
  templateUrl: 'picture-slides.html',
})
export class PictureSlidesPage {
  pictures: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pictures = navParams.get('pictures');
  }

  ionViewDidLoad() {}

  popPage(): void{
    this.navCtrl.pop();
  }

}
