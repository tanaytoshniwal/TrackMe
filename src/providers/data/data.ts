import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface todo{}

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
    console.log('Hello DataProvider Provider');
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
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

}
