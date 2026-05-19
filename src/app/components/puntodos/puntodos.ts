import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { Cart } from '../cart/cart';

export class PuntodosModule { }

@Component({
  selector: 'app-puntodos',
  standalone: true,
  imports: [CommonModule, Card, Cart],
  templateUrl: './puntodos.html',
  styleUrl: './puntodos.css',
})
export class Puntodos {

  seleccionados = ['prod2','prod7'];

  get seleccionProductos() {
    return this.productos.filter(p => this.seleccionados.includes(p.id));
  }

  productos = [
    { id: "prod1", nombre: "Producto 1", descripcion: "Descripción del producto 1", img: "assets/prod1.jpg", precio: 19.99 },
    { id: "prod2", nombre: "Producto 2", descripcion: "Descripción del producto 2", img: "assets/prod2.jpg", precio: 29.99 },
    { id: "prod3", nombre: "Producto 3", descripcion: "Descripción del producto 3", img: "assets/prod3.jpg", precio: 39.99 },
    { id: "prod4", nombre: "Producto 4", descripcion: "Descripción del producto 4", img: "assets/prod4.jpg", precio: 49.99 },
    { id: "prod5", nombre: "Producto 5", descripcion: "Descripción del producto 5", img: "assets/prod5.jpg", precio: 59.99 },
    { id: "prod6", nombre: "Producto 6", descripcion: "Descripción del producto 6", img: "assets/prod6.jpg", precio: 69.99 },
    { id: "prod7", nombre: "Producto 7", descripcion: "Descripción del producto 7", img: "assets/prod7.jpg", precio: 79.99 },
    { id: "prod8", nombre: "Producto 8", descripcion: "Descripción del producto 8", img: "assets/prod8.jpg", precio: 89.99 },
    { id: "prod9", nombre: "Producto 9", descripcion: "Descripción del producto 9", img: "assets/prod9.jpg", precio: 99.99 }
  ];
}

