import { Injectable } from '@angular/core';
import {Firestore, collection, addDoc, query, getDocs, orderBy} from '@angular/fire/firestore';
import Comment from "../../interfaces/comment.interface";
import {map, Observable} from 'rxjs';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private firestore: Firestore) {
  }

  addComment(comment: Comment) {
    const commentsRef = collection(this.firestore, 'comments');
    return addDoc(commentsRef, comment);
  }

  getComments(): Observable<Comment[]> {

    const commentsRef = collection(this.firestore, 'comments');
    const queryRef = query(commentsRef, orderBy('timestamp', 'desc')); // Ordenar por fecha (descendente)

    return from(getDocs(queryRef)).pipe(
      map(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          return doc.data() as Comment;
        })
      })
    );

  }
}






