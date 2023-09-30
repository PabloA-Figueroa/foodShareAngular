import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CommentsService} from "../services/coments.service";
import Comment from "../../interfaces/comment.interface";

@Component({
  selector: 'app-resenias',
  templateUrl: './resenias.component.html',
  styleUrls: ['./resenias.component.css']
})
export class ReseniasComponent implements OnInit {
  commentForm: FormGroup;
  comments: Comment[] = [];

  constructor(private commentsService: CommentsService) {
    this.commentForm = new FormGroup({
      user: new FormControl(''),
      timestamp: new FormControl(''),
      content: new FormControl(''),
    });
  }

  ngOnInit() {
    this.getComments();
  }
  commentError: string = ''; // Variable para almacenar el mensaje de error

  onSubmit() {
    const {user, content} = this.commentForm.value;

    // Verifica si el contenido del comentario está vacío o contiene solo espacios en blanco
    if (!content.trim()) {
      // Establece el mensaje de error
      this.commentError = 'No puedes ingresar un comentario vacío.';
      return; // Detiene la función
    }
    // Si no hay error, limpia el mensaje de error
    this.commentError = '';

    const timestamp = new Date();
    const comment: Comment = {user, content, timestamp};

    this.commentsService.addComment(comment)
      .then(() => {
        // Comentario agregado con éxito, puedes realizar alguna acción si lo deseas
        this.commentForm.reset(); // Limpia el formulario
      })
      .catch((error) => {
        console.error('Error al agregar el comentario:', error);
      });
  }

  getComments() {
    this.commentsService.getComments().subscribe(comments => {
      this.comments = comments;
    });
  }
  convertTimestampToDateString({timestamp}: { timestamp: any }): string {
    const date = timestamp.toDate();

    // Define las opciones de formato
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    };

    // Utiliza las opciones para formatear la fecha
    return date.toLocaleDateString('es-ES', options); // Cambia 'es-ES' al idioma que desees
  }
}
