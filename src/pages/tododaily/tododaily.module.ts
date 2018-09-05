import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TododailyPage } from './tododaily';

@NgModule({
  declarations: [
    TododailyPage,
  ],
  imports: [
    IonicPageModule.forChild(TododailyPage),
  ],
})
export class TododailyPageModule {}
