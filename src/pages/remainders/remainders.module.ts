import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemaindersPage } from './remainders';

@NgModule({
  declarations: [
    RemaindersPage,
  ],
  imports: [
    IonicPageModule.forChild(RemaindersPage),
  ],
})
export class RemaindersPageModule {}
