import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the AddnotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addnote',
  templateUrl: 'addnote.html',
})
export class AddnotePage {

  title = '';
  content = '';
  submitable = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private data: DataProvider) {
    
  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  check(){
    if(this.title != '' && this.content != '')
      this.submitable = true;
    else
      this.submitable = false;
  }

  add(){
    this.data.notes.push({
      title: this.title, content: this.content, date: new Date(), pinned: false
    });

    this.dismiss();
  }

}
