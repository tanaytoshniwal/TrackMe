import { Component, OnInit } from '@angular/core';
import { Transaction, DataService } from '../data.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AddtransactionPage } from '../addtransaction/addtransaction.page';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  transactions:Array<Transaction> = [];

  transactions_collection: AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore,
    private dataService: DataService,
    private modalCtrl: ModalController,
    private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.transactions_collection = this.firestore.collection<any>('transactions', ref=>ref.where('_id', '==', this.afAuth.auth.currentUser.uid));
    this.transactions_collection.valueChanges().subscribe(data=>{
      data = this.filter_data(data);
      this.dataService.transactions = data.map(res=>res as Transaction);
      this.transactions = this.dataService.transactions;
    });
  }

  filter_data(data){
    data.map(res=>{res.date = res.date.toDate()})
    return data;
  }

  // openModal() {
  //   let modal = this.modalCtrl.create(AddtransactionPage);
  //   modal.present();
  // }

  async open(){
    const modal = await this.modalCtrl.create({
      component: AddtransactionPage
    });
    return await modal.present();
  }

  gotback(i, o){
    this.transactions_collection.doc(o._ref).update({lend: false});
  }

  remove(i, o){
    this.transactions_collection.doc(o._ref).delete();
  }

  formatDate(date, time) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    if(time)
      return day + ' ' + monthNames[monthIndex] + ' ' + year + ' | ' + date.toLocaleTimeString();
    else
      return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

}
