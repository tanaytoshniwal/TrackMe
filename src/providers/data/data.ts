import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface Todo{
  _ref: string,
  _id: string,
  task: String,
  priority: String,
  date: Date,
  status: String
}

export interface Transaction{
  _ref: string,
  _id: string,
  amount: Number,
  date: Date,
  reason: String,
  paid_to: String,
  lend: Boolean
}

export interface Note{
  title: String,
  content: String,
  date: Date,
  pinned: Boolean
}

@Injectable()
export class DataProvider {

  totalAmount:Number;

  todoDaily: Array<Todo>;

  todoMonthly: Array<Todo>;

  todoWeekly: Array<Todo>;

  todoYearly: Array<Todo>;

  transactions: Array<Transaction>;

  notes = [
    {title: 'One', content: 'sample', date: new Date(), pinned: false},
    {title: 'Two', content: 'sample', date: new Date(), pinned: true},
    {title: 'Three', content: 'sample', date: new Date(), pinned: false},
    {title: 'Four', content: 'sample', date: new Date(), pinned: false},
    {title: 'Five', content: 'sample', date: new Date(), pinned: true}
  ];

  constructor(public http: HttpClient) {
    
  }

  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year + ' | ' + date.toLocaleTimeString();
  }

}
