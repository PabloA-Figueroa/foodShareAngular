import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  cards = [
    {
      image: 'https://picsum.photos/id/100/800/600',
      title: 'Restaurante 1',
      text: 'Este es el restaurante 1'
    },
    {
      image: 'https://picsum.photos/id/101/800/600',
      title: 'Restaurante 2',
      text: 'Este es el restaurante 2'
    },
    {
      image: 'https://picsum.photos/id/102/800/600',
      title: 'Restaurante 3',
      text: 'Este es el restaurante 3'
    }
  ];

  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.cards.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.cards.length) % this.cards.length;
  }

}
