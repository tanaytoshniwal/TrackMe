import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodomonthlyPage } from './todomonthly';

@NgModule({
  declarations: [
    TodomonthlyPage,
  ],
  imports: [
    IonicPageModule.forChild(TodomonthlyPage),
  ],
})
export class TodomonthlyPageModule {}
