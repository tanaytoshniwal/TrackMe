import { Component } from '@angular/core';

import { TransactionsPage } from '../transactions/transactions';
import { ToDoPage } from '../to-do/to-do';
import { NotesPage } from '../notes/notes';
import { RemaindersPage } from '../remainders/remainders';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ToDoPage;
  tab2Root = TransactionsPage;
  tab3Root = NotesPage;
  tab4Root = RemaindersPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
