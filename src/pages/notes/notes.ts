import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider, Note } from '../../providers/data/data';
import { AddnotePage } from '../addnote/addnote';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider, private modalCtrl: ModalController) {
    this.notes = data.notes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }

  pin_switch(i){
    this.notes[i].pinned = !this.notes[i].pinned;
  }

  remove(i){
    this.notes.splice(i, 1);
  }

  openModal(){
    let modal = this.modalCtrl.create(AddnotePage);
    modal.present();
  }

}
