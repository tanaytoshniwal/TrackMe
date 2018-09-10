import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { CompleteweeklyPage } from '../completeweekly/completeweekly';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the TodoweeklyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todoweekly',
  templateUrl: 'todoweekly.html',
})
export class TodoweeklyPage {

  list = [];
  data = '';
  date:any = '';
  priority = 'Medium';
  tasks: string = 'Medium';
  obj = null;

  database: AngularFirestoreCollection;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private alertCtrl: AlertController, private dataProvider: DataProvider, private firestore: AngularFirestore, private authprovider: AuthserviceProvider) {
    this.list = dataProvider.todoWeekly;
    this.database = firestore.collection<any>('todo_weekly');
  }

  ionViewDidLoad() {
  }

  add(){
    if(this.data != null && this.data != ''){
      this.date = new Date();
      this.obj = {_id: this.authprovider.check_user().uid, task: this.data, status: 'pending', priority: this.priority, date: this.date};
      this.database.add(this.obj).then(data=>{
        this.database.doc(data.id).update({_ref: data.id});
        this.obj._ref = data.id;
        this.list.push(this.obj);
        this.obj = null;
      });
      this.data = '';
    }
  }

  remove(l, i){
    this.database.doc(this.list[i]._ref).delete().then(()=>{
      this.list.splice(i, 1);
    });
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
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.database.doc(l._ref).update({task: data.task}).then(()=>{
              l.task = data.task;
            });
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
    this.database.doc(l._ref).update({status: temp}).then(data=>{
      l.status = temp;
    });
  }

  complete(){
    let modal = this.modalCtrl.create(CompleteweeklyPage);
    modal.present();
  }

}
