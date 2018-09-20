import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider, Transaction } from '../../providers/data/data';
import { AddtransactionPage } from '../addtransaction/addtransaction';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

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

  constructor(public navCtrl: NavController, private firestore: AngularFirestore, public navParams: NavParams, private dataprovider: DataProvider, private modalCtrl: ModalController, private auth: AuthserviceProvider) {
    this.transactions_collection = firestore.collection<any>('transactions', ref=>ref.where('_id', '==' ,auth.check_user().uid));
    this.transactions_collection.valueChanges().subscribe(data=>{
      data = this.filter_data(data);
      this.dataprovider.transactions = data.map(res=>res as Transaction);
      this.transactions = this.dataprovider.transactions;
    });
  }

  filter_data(data){
    for(let i=0; i<data.length; i++){
      data[i].date = data[i].date.toDate();
    }
    return data;    
  }

  ionViewDidLoad() {
  }

  openModal() {
    let modal = this.modalCtrl.create(AddtransactionPage);
    modal.present();
  }

  gotback(i, o){
    this.transactions_collection.doc(o._ref).update({lend: false});
  }

  remove(i, o){
    this.transactions_collection.doc(o._ref).delete();
  }
}
