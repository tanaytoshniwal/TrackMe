import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

/**
 * Generated class for the CompletemonthlyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completemonthly',
  templateUrl: 'completemonthly.html',
})
export class CompletemonthlyPage {

  list = [];

  database: AngularFirestoreCollection;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private viewCtrl: ViewController, private dataProvider: DataProvider, private firestore: AngularFirestore, private authprovider: AuthserviceProvider) {
    this.list = dataProvider.todoMonthly;
    this.database = firestore.collection<any>('todo_monthly');
  }

  remove(l, i){
    this.database.doc(l._ref).delete().then(()=>{
      this.list.splice(i, 1);
    });
  }

  status(l){
    let temp;
    if(l.status == 'pending') {
      temp = 'completed';
    }
    else { 
      temp = 'pending';
    }
    this.database.doc(l._ref).update({status: temp}).then(data=>{
      l.status = temp;
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  ionViewDidLoad() {
  }

}
