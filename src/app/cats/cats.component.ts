import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatsService } from '../shared/cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit, OnDestroy {

  private activeCat;
  private catSub: Subscription

  constructor(private catService: CatsService) { }

  ngOnInit() {
    this.catSub = this.catService.activeCatSub.subscribe(cat => {
      this.activeCat = cat;
    })
  }

  incClicks(clicks) {
    this.activeCat.clicks = clicks + 1;
    this.catService.updateActiveClicks(clicks + 1);
  }

  resetClicks() {
    this.activeCat.clicks = 0;
    this.catService.updateActiveClicks(0);
  }

  ngOnDestroy() {
    this.catSub.unsubscribe();
  }

}
