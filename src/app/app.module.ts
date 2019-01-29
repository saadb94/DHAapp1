import { Charts2Page } from './../pages/charts2/charts2';
import { ChartsPage } from './../pages/charts/charts';
import { JournalPage } from './../pages/journal/journal';
import { SelectionPage } from './../pages/selection/selection';
import { Autosize } from './../directives/autosize/autosize';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NotesPage } from '../pages/notes/notes';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, 
    NotesPage, 
    Autosize,
    SelectionPage, 
    JournalPage, 
    ChartsPage,
    Charts2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, 
    NotesPage,
    SelectionPage,
    JournalPage, 
    ChartsPage, 
    Charts2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
