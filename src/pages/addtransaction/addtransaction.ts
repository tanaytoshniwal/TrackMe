import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the AddtransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtransaction',
  templateUrl: 'addtransaction.html',
})
export class AddtransactionPage {

  transactions = [];
  amount = '';
  reason = '';
  paid_to = '';
  date = new Date();
  lend = false;
  submitable = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private data: DataProvider) {
    this.transactions = data.transactions;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtransactionPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  check(){
    if(this.amount != '' && this.reason != '' && this.paid_to != ''){
      this.submitable = true;
    }
    else{
      this.submitable = false;
    }
  }

  add(){
    this.transactions.push({
      amount: this.amount, date: this.date, reason: this.reason, paid_to: this.paid_to, lend: this.lend
    });

    this.dismiss();
  }
}
