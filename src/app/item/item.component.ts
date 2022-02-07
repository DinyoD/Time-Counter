import { Component, Input, OnInit } from '@angular/core';

import { ItemsService } from '../services/items.service';
import { Item } from './item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item | undefined;


  constructor(private itemsService: ItemsService) {

  }
  
  ngOnInit(): void {
  }

  public pause(item: Item):void {
    console.log(item.startTime);
    
    let diff =(new Date().getTime() - item.startTime) / 1000;
    diff /= 60;
    const duration =  Math.abs(Math.round(diff));
    const pausedItem : Item = {
      ...item,
      stoped: true,
      endTime: new Date().getTime(),
      endTimeDisplay: new Date().toTimeString().slice(0, 8),
      durationTime: duration,

    };
    this.itemsService.updateItem(pausedItem);
  }

  public delete(item: Item):void {
    this.itemsService.deleteItem(item);
  }

  public isOld(creationDateDisplay: string|undefined): boolean{
    if (creationDateDisplay == undefined ) {
      return false;
    }
    return creationDateDisplay != new Date().toDateString();
  }
}
