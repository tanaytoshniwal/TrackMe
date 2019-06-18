import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todocompleted',
  templateUrl: './todocompleted.page.html',
  styleUrls: ['./todocompleted.page.scss'],
})
export class TodocompletedPage implements OnInit {

  list = []

  constructor(private modalController: ModalController, private dataService: DataService) {
    this.list = dataService.todoCompleted
  }

  ngOnInit() {
  }

  close(){
    this.modalController.dismiss();
  }

  undo(l, i){
    switch(this.list[i].type){
      case 0: this.dataService.todo.daily.push(this.list[i]); break;
      case 1: this.dataService.todo.weekly.push(this.list[i]); break;
      case 2: this.dataService.todo.monthly.push(this.list[i]); break;
      case 3: this.dataService.todo.yearly.push(this.list[i]); break;
    }
    this.list.splice(i, 1);
  }

  remove(l, i){
    this.list.splice(i, 1);
  }

  name(i){
    if(i == 0) return 'Daily Task'
    if(i == 1) return 'Weekly Task'
    if(i == 2) return 'Monthly Task'
    if(i == 3) return 'Yearly Task'
  }

}
