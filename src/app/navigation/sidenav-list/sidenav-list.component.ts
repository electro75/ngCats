import { Component, OnInit, ViewChild } from '@angular/core';
import { CatsService } from '../../shared/cats.service';
import { Cat } from '../../shared/cats.model';

import * as fromRoot from '../../app.reducer';
import * as cat from '../../shared/cats.actions';
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

  constructor(private catsService: CatsService, private __store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.catList.selectedOptions._multiple = false;
    // this.catArray = this.catsService.getCats();
    this.catArray   = this.__store.select(fromRoot.getAllCats)

    this.activeCat$ = this.__store.select(fromRoot.getActiveCat)
  }

  changeActiveCat(cat_id) {
    this.__store.dispatch(new cat.SetActiveCat(cat_id));
  }

}
