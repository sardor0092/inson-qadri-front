import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opened = false;

  toggleSide() {
    this.opened = !this.opened;
  }



  root = '';

  @Output() changeRoute = new EventEmitter<string>();
  routes!: any[];
  creator = false;
  admin = false;
  roles!: string[];
  user!: User | null;



  constructor(
    public router: Router,
    ) { }

  ngOnInit() {
  {

      
        

      
    

     /**
   * Easy selector helper function
   */
  const select = (el: any, all = false) => {
    el = el.trim()
    if (all) {
      return document.querySelectorAll(el)
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type: any, el: any, listener: any, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach((e: any) => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
  let k = document.querySelector('.mobile-nav-toggle');
  k?.addEventListener('click', 
  
  function(e: any) {
    select('#navbar').classList.toggle('navbar-mobile')
    k?.classList.toggle('bi-list')
    k?.classList.toggle('bi-x')
  }
  )
  let d = document.querySelector('.navbar .dropdown > a');
  d?.addEventListener('click',
   function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      d?.nextElementSibling?.classList.toggle('dropdown-active')
    }
  }, true)

  }

  


  }}
