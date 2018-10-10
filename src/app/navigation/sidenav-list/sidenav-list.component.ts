import { Component, OnInit, ViewChild } from '@angular/core';
import { Cat } from '../../shared/cats.model';

import * as fromRoot from '../../app.reducer';
import * as Cats from '../../shared/cats.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @ViewChild('catList') catList
  public catArray   : Observable<Cat[]> ;
  public activeCat$ : Observable<Cat>;

  constructor(private __store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.catList.selectedOptions._multiple = false;
    // this.catArray = this.catsService.getCats();
    this.catArray   = this.__store.select(fromRoot.getAllCats)

    this.activeCat$ = this.__store.select(fromRoot.getActiveCat)
  }

  changeActiveCat(cat_id) {
    this.__store.dispatch(new Cats.SetActiveCat(cat_id));
  }

}
