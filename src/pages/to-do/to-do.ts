import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { TododailyPage } from '../tododaily/tododaily';
import { TodoweeklyPage } from '../todoweekly/todoweekly';
import { TodomonthlyPage } from '../todomonthly/todomonthly';
import { TodoyearlyPage } from '../todoyearly/todoyearly';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { DataProvider, Todo } from '../../providers/data/data';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

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

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private firestore:AngularFirestore, private dataprovider: DataProvider, private authprovider: AuthserviceProvider) {

  }

  filter_data(data){
    for(let i=0; i<data.length; i++){
      data[i].date = data[i].date.toDate();
    }
    return data;    
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
