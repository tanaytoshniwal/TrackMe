import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the CompleteyearlyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completeyearly',
  templateUrl: 'completeyearly.html',
})
export class CompleteyearlyPage {

  list = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private viewCtrl: ViewController, private dataProvider: DataProvider) {
    this.list = dataProvider.todoYearly;
  }

  remove(l, i){
    this.list.splice(i, 1);
  }

  status(l){
    let temp;
    if(l.status == 'pending') {
      temp = 'completed';
    }
    else { 
      temp = 'pending';
    }
    l.status = temp;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  ionViewDidLoad() {
  }

}
