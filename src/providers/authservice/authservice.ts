import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthserviceProvider {
	private user: firebase.User;
  loading;

	constructor(public afAuth: AngularFireAuth, private loadingCtrl: LoadingController) {
		afAuth.authState.subscribe(user => {
			this.user = user;
    });
  }

  update(){
		this.afAuth.authState.subscribe(user => {
			this.user = user;
		});
  }

  check_user(): firebase.User{
    return this.user
  }

  set_user(user){
    this.user = user;
  }
  
  google_sign_in(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
    return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
  }

  signOut(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  private oauthSignIn(provider: AuthProvider){
    if (!(<any>window).cordova) {
			return this.afAuth.auth.signInWithPopup(provider).then(()=>{
        this.loading.dismiss();

      }).catch(err=>{
        console.log('error');
        this.loading.dismiss();
      });
    }
    else{
      return this.afAuth.auth.signInWithRedirect(provider)
			.then(() => {
        this.loading.dismiss();
				return this.afAuth.auth.getRedirectResult().then( result => {
					let token = result.credential.providerId;
					let user = result.user;
					console.log(token, user);
				}).catch(function(error) {
					alert(error.message);
				});
			});
    }
  }

}
