import { SelectionPage } from './../selection/selection';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  age: number;
  gender: string;
  singleValue4: string;

  constructor(public navCtrl: NavController) {

  }

  onsubmit(){
    console.log(this.age);
    console.log(this.gender);
    console.log(this.singleValue4);

    this.navCtrl.push(SelectionPage);
  }

}
