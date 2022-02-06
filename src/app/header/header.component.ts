import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Item } from '../item/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public item: Item ={
    creationDate: new Date(),
    startTime: new Date(),
    paused: false,
  }
  public ticketNumber: string = '';

  constructor(private itemService: ItemsService) {
  }

  addItem(item: Item) {
    this.itemService.addItem(item)
  }

  create(){
    const ticket = this.ticketNumber;
    if (ticket != '') {
      this.item.ticket = ticket;
      this.addItem(this.item);
      this.ticketNumber = '';
    }
  }

}
