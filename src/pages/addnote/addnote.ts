import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the AddnotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addnote',
  templateUrl: 'addnote.html',
})
export class AddnotePage {

  title = '';
  content = '';
  submitable = false;
  obj = null;
  notes = []

  database: AngularFirestoreCollection;

  constructor(private auth: AuthserviceProvider, public navCtrl: NavController, private firestore: AngularFirestore, public navParams: NavParams, private viewCtrl: ViewController, private data: DataProvider) {
    this.database = firestore.collection('notes');
  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  check(){
    if(this.title != '' && this.content != '')
      this.submitable = true;
    else
      this.submitable = false;
  }

  add(){

    this.obj = {_id: this.auth.check_user().uid, title: this.title, content: this.content, date: new Date(), pinned: false};

    this.database.add(this.obj).then(res=>{
      this.database.doc(res.id).update({_ref: res.id});
      this.obj._ref = res.id;
      this.obj = null; 
    });

    this.dismiss();
  }

}
