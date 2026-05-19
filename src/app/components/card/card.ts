import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() id: string = '';
  @Input() nombre: string = "Nombre del producto";
  @Input() descripcion: string = "Descripción del producto";
  @Input() img: string = "assets/prod.jpg";
  @Input() precio: number = 0.00;
  cantidad: number = 1;

  constructor(private cartService: CartService) {}

  addToCart() {
    const item: CartItem = {
      id: this.id,
      nombre: this.nombre,
      precio: this.precio,
      cantidad: this.cantidad
    };
    this.cartService.addToCart(item);
    this.cantidad = 1;
  }
}
