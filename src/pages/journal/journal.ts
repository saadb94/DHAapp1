import { Charts2Page } from './../charts2/charts2';
import { ChartsPage } from './../charts/charts';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { ToneAnalyzerV3 } from 'watson-developer-cloud';

var toneA;

@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html'
})
export class JournalPage {

  text1: string;
  JSONstring: string;
  //currentmood: Array<any> = [];
  moodhistory: string;
  mood_range: number;
  themood: string = 'No data received';

  selector: boolean = false;

  constructor(public navCtrl: NavController, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JournalPage');
  }

  sendPostRequest() {
    var toneAnalyzer = new ToneAnalyzerV3({
      version: '2017-09-21',
      iam_apikey: 'HlhWkdJYi8bJefPxi2wkxPoPqNWXuuOwgdKKrygDaE6W',
      url: 'https://gateway-lon.watsonplatform.net/tone-analyzer/api'
    });

    var toneParams = {
      tone_input: { 'text': this.text1 },
      content_type: 'application/json'
    };
    toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
      if (error) {
        console.log(error);
      } else {
        console.log(JSON.stringify(toneAnalysis, null, 2));

        toneA = JSON.stringify(toneAnalysis, null, 2);

        console.log("this is toneA" + toneA);
      }
    });
    // console.log(toneA);
  }

  logToneA() {
    console.log(toneA);
    // this.moodhistory.push(toneA);
    this.moodhistory = toneA;
    console.log('This is the current mood: ' + this.moodhistory);

    if (this.selector) {
      this.selector = !this.selector;
      this.navCtrl.push(ChartsPage);
    } else {
      this.selector = !this.selector;
      this.navCtrl.push(Charts2Page);
    }

    
  }

  async sendPostReqA() {
    await this.sendPostRequest();
    //console.log("this is the data needed\n" + toneA);
  }

  viewAnalysis() {
    this.moodhistory = toneA;
    console.log("the mood history is:" + this.moodhistory);

    this.themood = this.moodhistory;
  }
}