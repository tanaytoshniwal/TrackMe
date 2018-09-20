import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { DataProvider, Todo } from '../../providers/data/data';
import { CompleteyearlyPage } from '../completeyearly/completeyearly';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the TodoyearlyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todoyearly',
  templateUrl: 'todoyearly.html',
})
export class TodoyearlyPage {

  list = [];
  data = '';
  date:any = '';
  priority = 'Medium';
  tasks: string = 'Medium';
  obj = null;

  database: AngularFirestoreCollection;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private alertCtrl: AlertController, private dataProvider: DataProvider, private firestore: AngularFirestore, private authprovider: AuthserviceProvider) {
    this.database = firestore.collection<any>('todo_yearly', ref=>ref.where('_id', '==' ,authprovider.check_user().uid));
    this.database.valueChanges().subscribe(data=>{
      data = this.filter_data(data);
      this.dataProvider.todoYearly = data.map(response=>response as Todo);
      this.list = dataProvider.todoYearly;
    });
  }

  filter_data(data){
    for(let i=0; i<data.length; i++){
      data[i].date = data[i].date.toDate();
    }
    return data;    
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
        this.obj = null;
      });
      this.data = '';
    }
  }

  remove(l, i){
    this.database.doc(this.list[i]._ref).delete();
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
            this.database.doc(l._ref).update({task: data.task});
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
    this.database.doc(l._ref).update({status: temp});
  }

  complete(){
    let modal = this.modalCtrl.create(CompleteyearlyPage);
    modal.present();
  }
}
