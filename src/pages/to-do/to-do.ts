import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { TododailyPage } from '../tododaily/tododaily';
import { TodoweeklyPage } from '../todoweekly/todoweekly';
import { TodomonthlyPage } from '../todomonthly/todomonthly';
import { TodoyearlyPage } from '../todoyearly/todoyearly';

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

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

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
