import { Injectable } from '@angular/core';
import {collection, Firestore,addDoc} from "@angular/fire/firestore";
import Registro from 'src/interfaces/registro.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private firestore: Firestore ) { }

  addRegistro(registro: Registro) {
    const registroRef = collection(this.firestore,'registro');
    return addDoc(registroRef, registro);
  }
}

