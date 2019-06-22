import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Todo } from '../data.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-todocompleted',
  templateUrl: './todocompleted.page.html',
  styleUrls: ['./todocompleted.page.scss'],
})
export class TodocompletedPage implements OnInit {

  list = []

  database: AngularFirestoreCollection;

  constructor(private modalController: ModalController,
    private dataService: DataService,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore) {
  }

  ngOnInit() {
    this.database = this.firestore.collection<any>('todocompleted', ref=>ref.where('_id', '==' ,this.afAuth.auth.currentUser.uid));
    this.database.valueChanges().subscribe(data=>{
      data = this.filter_data(data);
      this.dataService.todoCompleted = data.map(response=>response as Todo);
      this.list = this.dataService.todoCompleted;
    });
  }

  filter_data(data){
    data.map(res=>{res.date = res.date.toDate()})
    return data;    
  }

  close(){
    this.modalController.dismiss();
  }

  undo(l, i){
    let db;
    switch(this.list[i].type){
      // case 0: this.dataService.todo.daily.push(this.list[i]); break;
      // case 1: this.dataService.todo.weekly.push(this.list[i]); break;
      // case 2: this.dataService.todo.monthly.push(this.list[i]); break;
      // case 3: this.dataService.todo.yearly.push(this.list[i]); break;
      case 0:
        db = this.firestore.collection<any>('tododaily', 
        ref=>ref.where('_id', '==' ,this.afAuth.auth.currentUser.uid));
        db.add(l).then(data=>{
          db.doc(data.id).update({_ref: data.id});
          l._ref = data.id;
        });
        break;
      case 1:
        db = this.firestore.collection<any>('todoweekly', 
        ref=>ref.where('_id', '==' ,this.afAuth.auth.currentUser.uid));
        db.add(l).then(data=>{
          db.doc(data.id).update({_ref: data.id});
          l._ref = data.id;
        });
        break;
      case 2:
        db = this.firestore.collection<any>('todomonthly', 
        ref=>ref.where('_id', '==' ,this.afAuth.auth.currentUser.uid));
        db.add(l).then(data=>{
          db.doc(data.id).update({_ref: data.id});
          l._ref = data.id;
        });
        break;
      case 3:
        db = this.firestore.collection<any>('todoyearly', 
        ref=>ref.where('_id', '==' ,this.afAuth.auth.currentUser.uid));
        db.add(l).then(data=>{
          db.doc(data.id).update({_ref: data.id});
          l._ref = data.id;
        });
        break;
    }
    this.database.doc(l._ref).delete();
  }

  remove(l, i){
    this.database.doc(l._ref).delete();
  }
  // till here not tested
  name(i){
    if(i == 0) return 'Daily Task'
    if(i == 1) return 'Weekly Task'
    if(i == 2) return 'Monthly Task'
    if(i == 3) return 'Yearly Task'
  }

}
