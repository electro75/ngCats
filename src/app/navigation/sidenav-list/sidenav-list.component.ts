import { Component, OnInit, ViewChild } from '@angular/core';
import { CatsService } from '../../shared/cats.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @ViewChild('catList') catList
  public catArray = []

  constructor(private catsService: CatsService) { }

  ngOnInit() {
    this.catList.selectedOptions._multiple = false;
    this.catArray = this.catsService.getCats();
  }

  changeCat(cat_id) {
    this.catsService.getActiveCat(cat_id);
  }

}
