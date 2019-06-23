import { Component, OnInit } from '@angular/core';
import { DataService, Note } from '../data.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AddnotePage } from '../addnote/addnote.page';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  notes:Array<Note> = [];

  notes_collection: AngularFirestoreCollection;

  constructor(private dataService: DataService,
    private afAuth: AngularFireAuth,
    private modalCtrl: ModalController,
    private firestore: AngularFirestore) {
  }

  ngOnInit() {
    this.notes_collection = this.firestore.collection<any>('notes', ref=>ref.where('_id', '==' ,this.afAuth.auth.currentUser.uid));
    this.notes_collection.valueChanges().subscribe(data=>{
      data = this.filter_data(data);
      this.dataService.notes = data.map(res=> res as Note);
      this.notes = this.dataService.notes;
    });
  }

  filter_data(data){
    data.map(res=>{res.date = res.date.toDate()})
    return data;    
  }

  pin_switch(i, o){
    this.notes_collection.doc(o._ref).update({pinned: !o.pinned});
  }

  remove(i, o){
    this.notes_collection.doc(o._ref).delete();
  }

  fill(i, o){
    console.log((o.pinned)? "clear":"outline")
    return (o.pinned)? "clear":"outline";
  }
var = "outline"
  async openModal(){
    const modal = await this.modalCtrl.create({
      component: AddnotePage
    });
    return await modal.present();
  }

}
