import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { TododailyPage } from '../tododaily/tododaily';
import { TodoweeklyPage } from '../todoweekly/todoweekly';
import { TodomonthlyPage } from '../todomonthly/todomonthly';
import { TodoyearlyPage } from '../todoyearly/todoyearly';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ToDoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-to-do',
  templateUrl: 'to-do.html',
})
export class ToDoPage {

  daily_collection: AngularFirestoreCollection;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private firestore:AngularFirestore, private dataprovider: DataProvider) {
    this.daily_collection = firestore.collection<any>('todo_daily');
    this.daily_collection.valueChanges().subscribe(data=>{
      for(let i=0; i<data.length; i++){
        data[i].date = data[i].date.toDate();
      }
      this.dataprovider.todoDaily = data;
    });
  }

  open(i){
    switch(i){
      case 0:{
        this.navCtrl.push(TododailyPage);
        break;
      }
      case 1:{
        this.navCtrl.push(TodoweeklyPage);
        break;
      }
      case 2:{
        this.navCtrl.push(TodomonthlyPage);
        break;
      }
      case 3:{
        this.navCtrl.push(TodoyearlyPage);
        break;
      }
    }
  }

}
