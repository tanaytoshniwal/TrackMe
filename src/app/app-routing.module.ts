import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'todo', loadChildren: './todo/todo.module#TodoPageModule' },
  { path: 'transactions', loadChildren: './transactions/transactions.module#TransactionsPageModule' },
  { path: 'notes', loadChildren: './notes/notes.module#NotesPageModule' },
  { path: 'remainders', loadChildren: './remainders/remainders.module#RemaindersPageModule' },
  { path: 'fitness', loadChildren: './fitness/fitness.module#FitnessPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
