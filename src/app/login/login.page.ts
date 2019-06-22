import { Component, OnInit } from '@angular/core';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private afAuth: AngularFireAuth) { }

    ngOnInit() {
    }
    successCallback = (signInSuccessData: FirebaseUISignInSuccessWithAuthResult)=>{
      console.log('login')
    }
    errorCallback = (errorData: FirebaseUISignInFailure) => {
      console.log('err')
    }

}
