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
  _ref: string,
  _id: string,
  title: String,
  content: String,
  date: Date,
  pinned: Boolean
}

export interface Remainder{
  _ref: string,
  _id: string,
  title: String,
  date: Date,
  content: String
}

@Injectable()
export class DataProvider {
  // maybe used later
  //totalAmount:Number;

  todoDaily: Array<Todo>;

  todoMonthly: Array<Todo>;

  todoWeekly: Array<Todo>;

  todoYearly: Array<Todo>;

  remaiders: Array<Remainder> = [
    {_id: '', _ref: '', title: 'sample', date: new Date(), content: 'sample content'},
    {_id: '', _ref: '', title: 'sample 2', date: new Date(), content: 'sample content 2'}
  ];

  transactions: Array<Transaction>;

  notes: Array<Note>;

  constructor(public http: HttpClient) {
    
  }

  formatDate(date, time) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    if(time)
      return day + ' ' + monthNames[monthIndex] + ' ' + year + ' | ' + date.toLocaleTimeString();
    else
      return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

}
