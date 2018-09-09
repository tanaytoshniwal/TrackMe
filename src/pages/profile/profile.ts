import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user;
  username;
  email;
  photourl;
  phone;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthserviceProvider, private app: App) {
    this.user = auth.check_user();
    this.username = auth.check_user().displayName.toUpperCase();
    this.email = auth.check_user().email;
    this.photourl = auth.check_user().photoURL;
    this.phone = auth.check_user().phoneNumber;
    
  }

  logOut(){
    this.auth.signOut().then(item => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }

  ionViewDidLoad() {
  }

}
