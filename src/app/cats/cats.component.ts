import { Component, OnInit } from '@angular/core';
import { Cat } from '../shared/cats.model';

import * as fromRoot from '../app.reducer';
import * as cat from '../shared/cats.actions';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getActiveCat } from '../shared/cats.reducer';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  activeCatSub = new Subscription;
  public activeCat$

  constructor(private __store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.activeCat$ = this.__store.select(fromRoot.getActiveCat);
  }

  incClicks() {
    this.__store.dispatch(new cat.IncCatClicks(this.activeCat$.clicks))
  }

  resetClicks() {

  }

}
