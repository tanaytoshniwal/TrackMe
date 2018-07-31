import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToDoPage } from './to-do';

@NgModule({
  declarations: [
    ToDoPage,
  ],
  imports: [
    IonicPageModule.forChild(ToDoPage),
  ],
})
export class ToDoPageModule {}
