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

  public ticketNumber: string| null = null
  
  constructor(private itemService: ItemsService) {
  }

  create(){
    if (this.ticketNumber != null) {
      const item: Item ={
        creationDate: new Date(),
        creationDateDisplay: new Date().toDateString(),
        startTime: new Date().getTime(),
        startTimeDisplay: new Date().toTimeString().slice(0, 8),
        stoped: false,
        ticket: this.ticketNumber,
      }
      this.itemService.addItem(item);
      this.ticketNumber = null;
    }
  }

}
