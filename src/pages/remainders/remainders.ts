import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { DataProvider } from '../../providers/data/data';
import { AngularFirestore } from '@angular/fire/firestore';
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

  remainders = [];

  constructor(public navCtrl: NavController, private firestore: AngularFirestore, public navParams: NavParams, private dataprovider: DataProvider, private modalCtrl: ModalController, private auth: AuthserviceProvider) {
    this.remainders = dataprovider.remaiders;
  }

  ionViewDidLoad() {
  }

  openModal() {
    let modal = this.modalCtrl.create(AddremainderPage);
    modal.present();
  }

}
