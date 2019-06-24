import { Component, OnInit } from '@angular/core';
import { AddremainderPage } from '../addremainder/addremainder.page';
import { Remainder, DataService } from '../data.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-remainders',
  templateUrl: './remainders.page.html',
  styleUrls: ['./remainders.page.scss'],
})
export class RemaindersPage implements OnInit {

  remainders: Array<Remainder> = [];

  remainder_collection: AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore,
    private dataService: DataService,
    private modalCtrl: ModalController,
    private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.remainder_collection = this.firestore.collection<any>('remainders', ref=>ref.where('_id', '==', this.afAuth.auth.currentUser.uid));
    this.remainder_collection.valueChanges().subscribe(res => {
      res = this.filter_data(res);
      this.dataService.remaiders = res.map(res => res as Remainder);
      this.remainders = this.dataService.remaiders;
    });
  }

  filter_data(data){
    data.map(res=>{res.date = new Date(res.date)})
    return data; 
  }

  remove(i, note) {
    this.remainder_collection.doc(note._ref).delete();
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: AddremainderPage
    });
    return await modal.present();
  }

}
