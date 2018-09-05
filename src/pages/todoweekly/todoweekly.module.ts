import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoweeklyPage } from './todoweekly';

@NgModule({
  declarations: [
    TodoweeklyPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoweeklyPage),
  ],
})
export class TodoweeklyPageModule {}
