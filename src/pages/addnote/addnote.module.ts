import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddnotePage } from './addnote';

@NgModule({
  declarations: [
    AddnotePage,
  ],
  imports: [
    IonicPageModule.forChild(AddnotePage),
  ],
})
export class AddnotePageModule {}
