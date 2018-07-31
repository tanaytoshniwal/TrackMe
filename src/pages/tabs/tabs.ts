import { Component } from '@angular/core';

import { TransactionsPage } from '../transactions/transactions';
import { ToDoPage } from '../to-do/to-do';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TransactionsPage;
  tab2Root = ToDoPage;

  constructor() {

  }
}
