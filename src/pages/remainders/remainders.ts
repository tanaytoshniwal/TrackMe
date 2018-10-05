import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { DataProvider, Remainder } from '../../providers/data/data';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AddremainderPage } from '../addremainder/addremainder';

/**
 * Generated class for the RemaindersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remainders',
  templateUrl: 'remainders.html',
})
export class RemaindersPage {

  remainders: Array<Remainder> = [];

  remainder_collection: AngularFirestoreCollection;

  constructor(public navCtrl: NavController, private firestore: AngularFirestore, public navParams: NavParams, private dataprovider: DataProvider, private modalCtrl: ModalController, private auth: AuthserviceProvider) {
    this.remainder_collection = firestore.collection<any>('remainders', ref=>ref.where('_id', '==' ,auth.check_user().uid));
    this.remainder_collection.valueChanges().subscribe(res => {
      // res = this.filter_data(res);
      this.dataprovider.remaiders = res.map(res => res as Remainder);
      this.remainders = dataprovider.remaiders;
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
    let modal = this.modalCtrl.create(AddremainderPage);
    modal.present();
  }

}
