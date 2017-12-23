import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

//import the Client service
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clientsRef: AngularFireList<any>;
  clients: Observable<any[]>;
  client: Observable<any>;


  constructor(private db: AngularFireDatabase) {
    this.clientsRef = this.db.list('clients');
    // Use snapshotChanges().map() to store the key
    this.clients = this.clientsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  // this.clients = this.clientsRef.valueChanges();
  // }

  getClients(){
    return this.clients;
  }

}
