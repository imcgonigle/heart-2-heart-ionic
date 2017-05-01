import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EmotionPage } from '../pages/emotion/emotion';

import { PictureSlidesPage } from '../pages/picture-slides/picture-slides';
import { VideoPlayerPage } from '../pages/video-player/video-player';

import { EmojiGameModule } from '../pages/emoji-game/emoji-game.module';
import { GameModule } from '../pages/emoji-game/game/game.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EmotionPage,
    PictureSlidesPage,
    VideoPlayerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    EmojiGameModule,
    GameModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EmotionPage,
    PictureSlidesPage,
    VideoPlayerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
