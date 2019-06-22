import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { DataService, Todo } from '../data.service';

import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage implements OnInit {

  @Input() pageType: Number;
  title: string;

  list = [];
  todo;
  data = '';
  date:any = '';
  priority = 'Medium';
  tasks: string = 'Medium';
  obj = null;

  database: AngularFirestoreCollection;

  constructor(private modalController: ModalController,
    private dataService: DataService,
    private alertController: AlertController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore) {
    this.todo = dataService.todo;
  }
  
  ngOnInit() {
    switch(this.pageType){
      case 0:
        this.title = 'Daily Tasks';
        this.list = this.todo.daily;
        this.database = this.firestore.collection<any>('tododaily', ref=>ref.where('_id', '==' ,this.afAuth.auth.currentUser.uid));
        this.database.valueChanges().subscribe(data=>{
          data = this.filter_data(data);
          this.dataService.todoDaily = data.map(response=>response as Todo);
          this.list = this.dataService.todoDaily;
        });
        break;
      case 1:
        this.title = 'Weekly Tasks';
        this.list = this.todo.weekly;
        this.database = this.firestore.collection<any>('todoweekly', ref=>ref.where('_id', '==' ,this.afAuth.auth.currentUser.uid));
        this.database.valueChanges().subscribe(data=>{
          data = this.filter_data(data);
          this.dataService.todoWeekly = data.map(response=>response as Todo);
          this.list = this.dataService.todoWeekly;
        });
        break;
      case 2:
        this.title = 'Monthly Tasks';
        this.list = this.todo.monthly;
        this.database = this.firestore.collection<any>('todomonthly', ref=>ref.where('_id', '==' ,this.afAuth.auth.currentUser.uid));
        this.database.valueChanges().subscribe(data=>{
          data = this.filter_data(data);
          this.dataService.todoMonthly = data.map(response=>response as Todo);
          this.list = this.dataService.todoMonthly;
        });
        break;
      case 3:
        this.title = 'Yearly Tasks';
        this.list = this.todo.yearly;
        this.database = this.firestore.collection<any>('todoyearly', ref=>ref.where('_id', '==' ,this.afAuth.auth.currentUser.uid));
        this.database.valueChanges().subscribe(data=>{
          data = this.filter_data(data);
          this.dataService.todoYearly = data.map(response=>response as Todo);
          this.list = this.dataService.todoYearly;
        });
        break;
      default: this.title = 'ToDo';
    }
  }

  filter_data(data){
    data.map(res=>{res.date = res.date.toDate()})
    return data;    
  }

  close(){
    this.modalController.dismiss();
  }

  add(){
    if(this.data != null && this.data != ''){
      this.date = new Date();
      this.obj = {
        _id: this.afAuth.auth.currentUser.uid,
        task: this.data,
        priority: this.priority,
        date: this.date,
        type: this.pageType
      };
      this.database.add(this.obj).then(data=>{
        this.database.doc(data.id).update({_ref: data.id});
        this.obj._ref = data.id;
        this.obj = null;
      });
      this.data = '';
    }
  }

  remove(l, i){
    // this.database.doc(this.list[i]._ref).delete();
    this.database.doc(this.list[i]._ref).delete();
  }


  async edit(l, i){
    const prompt = await this.alertController.create({
      header: 'Edit Task',
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
            //this.database.doc(l._ref).update({task: data.task});
            this.list[i].task = data.task;
          }
        }
      ]
    });
    prompt.present();
  }

  status(l, i){
    this.todo.completed.push(this.list[i]);
    this.list.splice(i, 1);
    // let temp;
    // if(l.status == 'pending') {
    //   temp = 'completed';
    // }
    // else { 
    //   temp = 'pending';
    // }
    // this.list[i].status = temp;
    // this.database.doc(l._ref).update({status: temp});
  }

  complete(){
    // let modal = this.modalCtrl.create(CompletedailyPage);
    // modal.present();
  }

}
