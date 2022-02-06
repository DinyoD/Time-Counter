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

  start(item: Item):void {

  }

  pause(item: Item):void {
    
  }

  delete(item: Item):void {

  }
}
