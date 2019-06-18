import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { DataService } from '../data.service';

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

  constructor(private modalController: ModalController, private dataService: DataService, private alertController: AlertController) {
    this.todo = dataService.todo;
  }
  
  ngOnInit() {
    switch(this.pageType){
      case 0:
        this.title = 'Daily Tasks';
        this.list = this.todo.daily;
        break;
      case 1:
        this.title = 'Weekly Tasks';
        this.list = this.todo.weekly;
        break;
      case 2:
        this.title = 'Monthly Tasks';
        this.list = this.todo.monthly;
        break;
      case 3:
        this.title = 'Yearly Tasks';
        this.list = this.todo.yearly;
        break;
      default: this.title = 'ToDo';
    }
  }

  close(){
    this.modalController.dismiss();
  }

  add(){
    if(this.data != null && this.data != ''){
      this.date = new Date();
      this.obj = {
        //_id: this.authprovider.check_user().uid,
        task: this.data,
        priority: this.priority,
        date: this.date,
        type: this.pageType
      };
      this.list.push(this.obj);
      this.data = '';
    }
  }

  remove(l, i){
    // this.database.doc(this.list[i]._ref).delete();
    this.list.splice(i, 1);
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
