import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { DataProvider } from '../../providers/data/data';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the AddremainderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addremainder',
  templateUrl: 'addremainder.html',
})
export class AddremainderPage {

  date = null;
  title = '';
  description = '';
  submitable = false;
  obj = null;

  database: AngularFirestoreCollection;

  constructor(public navCtrl: NavController, private auth: AuthserviceProvider, private firestore: AngularFirestore, public navParams: NavParams, private viewCtrl: ViewController, private data: DataProvider) {
    this.database = firestore.collection<any>('remainders');
  }

  check(){
    if(this.title != '' && this.date != null && this.description != ''){
      this.submitable = true;
    }
    else{
      this.submitable = false;
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  add(){
    this.obj = {_id: this.auth.check_user().uid, title: this.title, date: this.date, description: this.description};
    this.database.add(this.obj).then(res=>{
      this.database.doc(res.id).update({_ref: res.id});
      this.obj._ref = res.id;
      this.obj = null;
    });

    this.dismiss();
  }

}
