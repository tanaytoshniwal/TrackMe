import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  { path: '', redirectTo: 'home/todo', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', redirectTo: 'home/todo', pathMatch: 'full' },
  { 
    path: 'home',
    component: HomePage,
    children: [
      { path: 'todo', loadChildren: './todo/todo.module#TodoPageModule' },
      { path: 'transactions', loadChildren: './transactions/transactions.module#TransactionsPageModule' },
      { path: 'notes', loadChildren: './notes/notes.module#NotesPageModule' },
      { path: 'remainders', loadChildren: './remainders/remainders.module#RemaindersPageModule' },
      { path: 'fitness', loadChildren: './fitness/fitness.module#FitnessPageModule' }
    ]
  },
  { path: 'addtransaction', loadChildren: './addtransaction/addtransaction.module#AddtransactionPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
