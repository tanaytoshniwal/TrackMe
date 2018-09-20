import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

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
  date = null;
  lend = false;
  submitable = false;
  obj = null;

  database: AngularFirestoreCollection;

  constructor(public navCtrl: NavController, private auth: AuthserviceProvider, private firestore: AngularFirestore, public navParams: NavParams, private viewCtrl: ViewController, private data: DataProvider) {
    this.transactions = [];
    this.database = firestore.collection<any>('transactions');
  }

  ionViewDidLoad() {
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
    let new_date;
    if(this.date == null)
      new_date = new Date();
    else
      new_date = new Date(this.date)

    this.obj = {_id: this.auth.check_user().uid, amount: this.amount, date: new_date, reason: this.reason, paid_to: this.paid_to, lend: this.lend};
    this.database.add(this.obj).then(res=>{
      this.database.doc(res.id).update({_ref: res.id});
      this.obj._ref = res.id;
      this.transactions.push(this.obj);
      this.obj = null;
    });

    this.dismiss();
  }
}
