import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider, Note } from '../../providers/data/data';
import { AddnotePage } from '../addnote/addnote';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  notes:Array<Note> = [];

  notes_collection: AngularFirestoreCollection;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataprovider: DataProvider, private auth: AuthserviceProvider, private modalCtrl: ModalController, private firestore: AngularFirestore) {
    this.notes_collection = firestore.collection<any>('notes', ref=>ref.where('_id', '==' ,auth.check_user().uid));
    this.notes_collection.valueChanges().subscribe(data=>{
      data = this.filter_data(data);
      this.dataprovider.notes = data.map(res=> res as Note);
      this.notes = dataprovider.notes;
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

  pin_switch(i, o){
    this.notes_collection.doc(o._ref).update({pinned: !o.pinned});
  }

  remove(i, o){
    this.notes_collection.doc(o._ref).delete();
  }

  openModal(){
    let modal = this.modalCtrl.create(AddnotePage);
    modal.present();
  }

}
