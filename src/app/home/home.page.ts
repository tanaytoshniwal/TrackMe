import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    effect: 'fade',
    freeMode: true
  };
  topSlide = [{
    image: "/assets/shapes.svg",
    title: 'ToDo List',
    url: '/todo',
    sub: 'Maintain a User Friendly ToDo List'
  },{
    image: "/assets/shapes.svg",
    title: 'Transactions',
    url: '/',
    sub: 'Record your daily money Transactions'
  },{
    image: "/assets/shapes.svg",
    title: 'Notes',
    url: '/',
    sub: 'Make a note before you forget anything'
  },{
    image: "/assets/shapes.svg",
    title: 'Remainders',
    url: '/',
    sub: 'Let the app remind you of your tasks'
  },{
    image: "/assets/shapes.svg",
    title: 'Fitness Section',
    url: '/',
    sub: 'Track your workout routein and follow a diet'
  }];
  constructor(private router: Router){}
  navigate(url){
    this.router.navigate([url]);
  }
}
