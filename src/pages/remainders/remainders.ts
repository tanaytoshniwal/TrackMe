import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { DataProvider } from '../../providers/data/data';
import { AngularFirestore } from '@angular/fire/firestore';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthserviceProvider, private dataprovider: DataProvider, private firestore: AngularFirestore) {
    
  }

  ionViewDidLoad() {
  }

}
