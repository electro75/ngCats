import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatsService } from '../shared/cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  private activeCat;
  private catSub: Subscription

  constructor(private catService: CatsService) { }

  ngOnInit() {
    this.catSub = this.catService.activeCatSub.subscribe(cat => {
      this.activeCat = cat;
      console.log(this.activeCat);
    })
  }

}
