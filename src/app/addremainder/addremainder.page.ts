import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Time } from '@angular/common';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { DataService } from '../data.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-addremainder',
  templateUrl: './addremainder.page.html',
  styleUrls: ['./addremainder.page.scss'],
})
export class AddremainderPage implements OnInit {

  date = null;
  title = '';
  description = '';
  time:Time = null;
  obj = null;
  submitable = false;

  database: AngularFirestoreCollection;

  constructor(private modalController: ModalController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private data: DataService) { }

  ngOnInit() {
    this.database = this.firestore.collection<any>('remainders');
  }

  close(){
    this.modalController.dismiss();
  }

  check(){
    // console.log(this.title)
    // console.log(this.date)
    // console.log(this.description)
    // console.log(this.time)
    if(this.title != '' && this.date != null && this.description != '' && this.time != null){
      this.submitable = true;
    }else
    this.submitable = false;
  }

  add(){
    this.obj = {_id: this.afAuth.auth.currentUser.uid, title: this.title, date: this.date, description: this.description, time: this.time};
    this.database.add(this.obj).then(res=>{
      this.database.doc(res.id).update({_ref: res.id});
      this.obj._ref = res.id;
      this.obj = null;
    });

    this.close();
  }

}
