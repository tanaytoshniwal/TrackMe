import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface TodoDaily{
  _id: string,
  task: String,
  priority: String,
  date: Date,
  status: String
}

export interface TodoWeekly{
  task: String,
  priority: String,
  date: Date,
  status: String
}

export interface TodoMonthly{
  task: String,
  priority: String,
  date: Date,
  status: String
}

export interface TodoYearly{
  task: String,
  priority: String,
  date: Date,
  status: String
}

export interface Transaction{
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

  todoDaily: Array<TodoDaily>;

  todoMonthly: Array<TodoMonthly> = [
    {task: 'one_M', priority: 'High', date: new Date(), status: 'pending'},
    {task: 'two_M', priority: 'High', date: new Date(), status: 'pending'},
    {task: 'three_M', priority: 'Medium', date: new Date(), status: 'pending'},
    {task: 'four_M', priority: 'Low', date: new Date(), status: 'pending'},
    {task: 'five_M', priority: 'Low', date: new Date(), status: 'pending'},
    {task: 'six_M', priority: 'Medium', date: new Date(), status: 'pending'}
  ];

  todoWeekly: Array<TodoWeekly> = [
    {task: 'one_W', priority: 'High', date: new Date(), status: 'pending'},
    {task: 'two_W', priority: 'High', date: new Date(), status: 'pending'},
    {task: 'three_W', priority: 'Medium', date: new Date(), status: 'pending'},
    {task: 'four_W', priority: 'Low', date: new Date(), status: 'pending'},
    {task: 'five_W', priority: 'Low', date: new Date(), status: 'pending'},
    {task: 'six_W', priority: 'Medium', date: new Date(), status: 'pending'}
  ];

  todoYearly: Array<TodoYearly> = [
    {task: 'one_Y', priority: 'High', date: new Date(), status: 'pending'},
    {task: 'two_Y', priority: 'High', date: new Date(), status: 'pending'},
    {task: 'three_Y', priority: 'Medium', date: new Date(), status: 'pending'},
    {task: 'four_Y', priority: 'Low', date: new Date(), status: 'pending'},
    {task: 'five_Y', priority: 'Low', date: new Date(), status: 'pending'},
    {task: 'six_Y', priority: 'Medium', date: new Date(), status: 'pending'}
  ];

  transactions: Array<Transaction> = [
    {amount: 101, date: new Date(), reason: 'sample', paid_to: 'sample_person', lend: false},
    {amount: 1011, date: new Date(), reason: 'sample', paid_to: 'sample_person', lend: true},
    {amount: 11, date: new Date(), reason: 'sample', paid_to: 'sample_person', lend: true},
    {amount: 1101, date: new Date(), reason: 'sample', paid_to: 'sample_person', lend: false},
    {amount: 1, date: new Date(), reason: 'sample', paid_to: 'sample_person', lend: true}
  ];

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
