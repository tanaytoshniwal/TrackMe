import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToDoPage } from '../pages/to-do/to-do';
import { TransactionsPage } from '../pages/transactions/transactions';
import { NotesPage } from '../pages/notes/notes';
import { RemaindersPage } from '../pages/remainders/remainders';
import { ProfilePage } from '../pages/profile/profile';
import { AddtransactionPage } from '../pages/addtransaction/addtransaction';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';
import { AddnotePage } from '../pages/addnote/addnote';
import { TododailyPage } from '../pages/tododaily/tododaily';
import { TodoweeklyPage } from '../pages/todoweekly/todoweekly';
import { TodomonthlyPage } from '../pages/todomonthly/todomonthly';
import { TodoyearlyPage } from '../pages/todoyearly/todoyearly';
import { CompletedailyPage } from '../pages/completedaily/completedaily';
import { CompleteweeklyPage } from '../pages/completeweekly/completeweekly';
import { CompletemonthlyPage } from '../pages/completemonthly/completemonthly';
import { CompleteyearlyPage } from '../pages/completeyearly/completeyearly';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ToDoPage,
    TransactionsPage,
    NotesPage,
    RemaindersPage,
    AddnotePage,
    ProfilePage,
    AddtransactionPage,
    TododailyPage,
    TodoweeklyPage,
    TodomonthlyPage,
    TodoyearlyPage,
    CompletedailyPage,
    CompleteweeklyPage,
    CompletemonthlyPage,
    CompleteyearlyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ToDoPage,
    TransactionsPage,
    NotesPage,
    AddnotePage,
    RemaindersPage,
    ProfilePage,
    AddtransactionPage,
    TododailyPage,
    TodoweeklyPage,
    TodomonthlyPage,
    TodoyearlyPage,
    CompletedailyPage,
    CompleteweeklyPage,
    CompletemonthlyPage,
    CompleteyearlyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
