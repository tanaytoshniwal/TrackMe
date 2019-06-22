import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { DataService } from '../data.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.page.html',
  styleUrls: ['./addtransaction.page.scss'],
})
export class AddtransactionPage implements OnInit {
  amount = '';
  reason = '';
  paid_to = '';
  date = null;
  lend = false;
  submitable = false;
  obj = null;

  database: AngularFirestoreCollection;

  constructor(private modalController: ModalController,
    private dataService: DataService,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.database = this.firestore.collection<any>('transactions');
  }

  close(){
    this.modalController.dismiss();
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

    this.obj = {_id: this.afAuth.auth.currentUser.uid, amount: this.amount, date: new_date, reason: this.reason, paid_to: this.paid_to, lend: this.lend};
    this.database.add(this.obj).then(res=>{
      this.database.doc(res.id).update({_ref: res.id});
      this.obj._ref = res.id;
      this.obj = null;
    });

    this.close();
  }

}
