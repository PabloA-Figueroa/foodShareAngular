import { Injectable } from '@angular/core';
import {collection, Firestore, addDoc, updateDoc, getDoc} from "@angular/fire/firestore";
import {doc} from 'firebase/firestore'
import Registro from 'src/interfaces/registro.interfaces';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private firestore: Firestore ) { }

  addRegistro(registro: Registro) {
    const registroRef = collection(this.firestore,'registro');
    return addDoc(registroRef, registro);
  }

  // Obtener un registro (usuario) por su ID
  async getRegistroById(registroId: string): Promise<Registro | undefined> {
    try {
      const docRef = doc(this.firestore, 'registro', registroId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        } as Registro;
      } else {
        return undefined; // El documento no existe
      }
    } catch (error) {
      console.error('Error al obtener el registro:', error);
      throw new Error('Error al obtener el registro'); // Puedes personalizar el mensaje de error según tus necesidades
    }
  }


  // Actualizar la información del perfil del usuario
  updateRegistro(registroId: string, nuevoNombre: string, nuevaDireccion: string): Promise<void> {
    const registroDocRef = doc(this.firestore, 'registro', registroId);
    return updateDoc(registroDocRef, {
      nombre: nuevoNombre,
      direccion: nuevaDireccion
    });
  }
}

