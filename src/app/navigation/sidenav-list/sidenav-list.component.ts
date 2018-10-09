import { Component, OnInit, ViewChild } from '@angular/core';
import { CatsService } from '../../shared/cats.service';
import { Cat } from '../../shared/cats.model';
// import * as fromCat from '../../shared/cats.reducer';
import * as fromRoot from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @ViewChild('catList') catList
  public catArray: Observable<Cat[]> ;

  constructor(private catsService: CatsService, private __store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.catList.selectedOptions._multiple = false;
    // this.catArray = this.catsService.getCats();
    this.catArray = this.__store.select(fromRoot.getAllCats)

  }

}
