import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage implements OnInit {

  @Input() pageType: number;
  title: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    switch(this.pageType){
      case 0: this.title = 'Daily Tasks'; break;
      case 1: this.title = 'Weekly Tasks'; break;
      case 2: this.title = 'Monthly Tasks'; break;
      case 3: this.title = 'Yearly Tasks'; break;
      default: this.title = 'ToDo';
    }
  }

  close(){
    this.modalController.dismiss();
  }

}
