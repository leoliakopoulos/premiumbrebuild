import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locationsRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { this.locationsRef = db.list('/Locations'); }
  create_NewLocation(record) {
    return this.locationsRef.push(record);
   // this.newTask = {name: ''};
  }

  read_Locations() {
    return this.locationsRef.snapshotChanges().pipe(
        map(changes =>
            (c => ({ key: c.payload.key, ...c.payload.val() }))
        )
    );
  }

  update_Location(key, name) {
   // this.firestore.doc('Locations/' + recordID).update(record);
    this.locationsRef.update(key, {name});
  }

  delete_Location(taskKey) {
    this.locationsRef.remove(taskKey);
    // this.firestore.doc('Locations/' + record_id).delete();
  }
}
