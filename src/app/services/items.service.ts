import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Item } from '../item/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  private itemsCollection: AngularFirestoreCollection<Item>;
  private items: Observable<Item[]>;

  constructor(private fireStore: AngularFirestore) {
    
    this.itemsCollection = this.fireStore.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  getItemsAsObservable(){
    return this.items;
  }

  addItem(item: Item){
    this.itemsCollection.add(item)
  }
}
