import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider, Transaction } from '../../providers/data/data';
import { AddtransactionPage } from '../addtransaction/addtransaction';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  transactions:Array<Transaction> = [];

  transactions_collection: AngularFirestoreCollection;

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider, private modalCtrl: ModalController) {
    this.transactions = data.transactions;
  }

  ionViewDidLoad() {
  }

  openModal() {
    let modal = this.modalCtrl.create(AddtransactionPage);
    modal.present();
  }

  gotback(i){
    this.transactions[i].lend = false;
  }

  remove(i){
    this.transactions.splice(i, 1);
  }
}
