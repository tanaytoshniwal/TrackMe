import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { CompletemonthlyPage } from '../completemonthly/completemonthly';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the TodomonthlyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todomonthly',
  templateUrl: 'todomonthly.html',
})
export class TodomonthlyPage {

  list = [];
  data = '';
  date:any = '';
  priority = 'Medium';
  tasks: string = 'Medium';
  obj = null;

  database: AngularFirestoreCollection;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private alertCtrl: AlertController, private dataProvider: DataProvider, private firestore: AngularFirestore, private authprovider: AuthserviceProvider) {
    this.list = dataProvider.todoMonthly;
    this.database = firestore.collection<any>('todo_monthly');
  }

  ionViewDidLoad() {
  }

  add(){
    if(this.data != null && this.data != ''){
      this.date = new Date();
      this.obj = {_id: this.authprovider.check_user().uid, task: this.data, status: 'pending', priority: this.priority, date: this.date};
      this.database.add(this.obj).then(data=>{
        this.list.push(this.obj);
        this.obj = null;
      });
      this.data = '';
    }
  }

  remove(l, i){
    this.list.splice(i, 1);
  }


  edit(l){
    const prompt = this.alertCtrl.create({
    title: 'Edit Task',
    inputs: [
        {
          name: 'task',
          placeholder: 'Task'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            l.task = data.task;
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  status(l){
    let temp;
    if(l.status == 'pending') {
      temp = 'completed';
    }
    else { 
      temp = 'pending';
    }
    l.status = temp;
  }

  complete(){
    let modal = this.modalCtrl.create(CompletemonthlyPage);
    modal.present();
  }

}
