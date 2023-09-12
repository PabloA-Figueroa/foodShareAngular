import { Component, OnInit  } from '@angular/core';

declare var $: any; // Declara la variable $ para acceder a jQuery

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    // Inicia el carrusel cuando se cargue el componente
    $('#cardCarousel').carousel();
  }
}
