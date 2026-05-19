import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
export class PuntounoModule { }

@Component({
  selector: 'app-puntouno',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './puntouno.html',
  styleUrl: './puntouno.css',
})
export class Puntouno {
 slides = [
  { img: "/assets/slide1.jpg", title: "Africa", description: "El Origen del Mundo" },
  { img: "/assets/slide2.jpg", title: "Europa", description: "El Viejo Mundo" },
  { img: "/assets/slide3.jpg", title: "America", description: "El Nuevo Mundo" }
];
}
