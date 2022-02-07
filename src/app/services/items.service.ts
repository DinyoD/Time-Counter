import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

import { Item } from '../item/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemDocument: AngularFirestoreDocument<Item>|null = null;
  private items: Observable<Item[]>;

  constructor(private fireStore: AngularFirestore) {
    
    this.itemsCollection = this.fireStore.collection<Item>('items', ref => ref.orderBy('creationDate', 'desc'));
    this.items = this.itemsCollection.snapshotChanges().pipe(map( (changeAction: any[]) => {
      return changeAction.map( a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  public getItemsAsObservable(): Observable<Item[]>{
    return this.items;
  }

  public addItem(item: Item): void{
    this.itemsCollection.add(item)
  }

  public deleteItem(item: Item): void {
    this.itemDocument = this.fireStore.doc(`/items/${item.id}`);
    this.itemDocument.delete();
  }

  public updateItem(item: Item): void {
    this.itemDocument = this.fireStore.doc(`/items/${item.id}`);
    this.itemDocument.update(item);
  }

}
