import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodolistPage } from '../todolist/todolist.page';
import { TodocompletedPage } from '../todocompleted/todocompleted.page';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async open(i){
    const modal = await this.modalController.create({
      component: TodolistPage,
      componentProps: { pageType: i }
    });
    return await modal.present();
  }

  async openComplete(){
    const modal = await this.modalController.create({
      component: TodocompletedPage
    });
    return await modal.present();
  }

}
