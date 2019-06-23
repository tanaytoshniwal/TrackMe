import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public user: firebase.User;
  public appPages = [
    // {
    //   title: 'Home',
    //   url: '/home',
    //   icon: 'home'
    // },
    // {
    //   title: 'ToDo List',
    //   url: '/todo',
    //   icon: 'paper'
    // }
  ];

  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
    this.initializeApp();
  }

  initializeApp = ()=>{
    this.platform.ready().then(() => {
      this.afAuth.authState.subscribe(this.firebaseAuthChangeListener);
      if(this.afAuth.auth.currentUser){
        this.user = this.afAuth.auth.currentUser
        this.menuCtrl.enable(true)
        this.router.navigateByUrl('/home')
      }
      else{
        this.menuCtrl.enable(false)
        this.router.navigateByUrl('/login')
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
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

  logout = ()=>{
    this.afAuth.auth.signOut().then(res=>{
      this.menuCtrl.enable(false);
    })
  }
}
