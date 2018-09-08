import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthserviceProvider, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  google(){
    this.auth.google_sign_in().then(()=>{
      console.log(this.auth.check_user());
      if(this.auth.check_user()){
        console.log(this.auth.check_user());
        console.log(this.app.getRootNav());
        this.app.getRootNav().setRoot(TabsPage);
      }
    }).catch(err=>{
      console.log('error');
    });
  }

}
