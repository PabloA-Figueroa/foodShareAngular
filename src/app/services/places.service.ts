import { Injectable } from '@angular/core';
import {collection, Firestore, addDoc, getDocs} from "@angular/fire/firestore";
import Place from "../../interfaces/place.interface";
import {from, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore ) { }

  addPlace(place: Place) {
    const placeRef = collection(this.firestore,'places');
    return addDoc(placeRef, place);
  }
  obtenerPlaces(): Observable<Place[]> {
    const placeRef = collection(this.firestore, 'places');
    return from(getDocs(placeRef)).pipe(
      map((querySnapshot) => {
        const places: Place[] = [];
        querySnapshot.forEach((doc) => {
          places.push(doc.data() as Place);
        });
        return places;
      })
    );
  }
}
