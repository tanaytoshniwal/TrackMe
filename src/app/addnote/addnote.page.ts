import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../data.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage implements OnInit {

  title = '';
  content = '';
  submitable = false;
  obj = null;
  notes = []

  database: AngularFirestoreCollection;

  constructor(private modalController: ModalController,
    private dataService: DataService,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.database = this.firestore.collection('notes');
  }

  close(){
    this.modalController.dismiss();
  }

  check(){
    if(this.title != '' && this.content != '')
      this.submitable = true;
    else
      this.submitable = false;
  }

  add(){

    this.obj = {_id: this.afAuth.auth.currentUser.uid, title: this.title, content: this.content, date: new Date(), pinned: false};

    this.database.add(this.obj).then(res=>{
      this.database.doc(res.id).update({_ref: res.id});
      this.obj._ref = res.id;
      this.obj = null; 
    });

    this.close();
  }

}
