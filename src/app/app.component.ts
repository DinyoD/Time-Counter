import { Component, OnInit } from '@angular/core';
import { Item } from './item/item';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title: string = 'time-counter';
  public pausedItems: Item[]|null = null
  public activeItems: Item[]|null = null;
  public oldItems: Item[]|null = null;

  constructor(private itemServie: ItemsService) {
  }

  ngOnInit(): void {
    this.itemServie.getItemsAsObservable().subscribe( items => {
      this.pausedItems = items.filter(x => x.stoped == true && x.creationDateDisplay == new Date().toDateString());
      this.activeItems = items.filter(x => x.stoped == false && x.creationDateDisplay == new Date().toDateString());
      this.oldItems = items.filter(x => x.creationDateDisplay != new Date().toDateString());
      console.log(this.oldItems);
      
    })
  }

}
