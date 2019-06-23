import { Component, OnInit } from '@angular/core';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private afAuth: AngularFireAuth,
    private menuCtrl: MenuController) { }
    user;
    ngOnInit() {
      this.afAuth.authState.subscribe(this.firebaseAuthChangeListener);
    }
    successCallback = (signInSuccessData: FirebaseUISignInSuccessWithAuthResult)=>{
      console.log('login')
    }
    errorCallback = (errorData: FirebaseUISignInFailure) => {
      console.log('err')
    }

    firebaseAuthChangeListener = (response)=>{
      // if needed, do a redirect in here
      if (response) {
        this.menuCtrl.enable(true)
        this.user = this.afAuth.auth.currentUser;
        // this.auth.user = this.afAuth.auth.currentUser;
        // console.log(this.auth.user)
        this.router.navigateByUrl('/home')
      } else {
        this.menuCtrl.enable(false)
        this.user = undefined;
        // this.auth.user = undefined;
        this.router.navigateByUrl('/login')
      }
    }

}
