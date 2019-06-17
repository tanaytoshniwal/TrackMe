import { Injectable } from '@angular/core';
import { Time } from '@angular/common';

export interface Todo{
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

export interface Remainder{
  title: String,
  date: Date,
  description: String,
  time: Time
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  todoDaily: Array<Todo> = [];
  todoMonthly: Array<Todo> = [];
  todoWeekly: Array<Todo> = [];
  todoYearly: Array<Todo> = [];
  todo = {
    daily: this.todoDaily,
    weekly: this.todoWeekly,
    monthly: this.todoMonthly,
    yearly: this.todoYearly
  }

  remaiders: Array<Remainder> = [];

  transactions: Array<Transaction> = [];

  notes: Array<Note> = [];

  constructor() { }

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
