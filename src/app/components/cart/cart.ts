import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  showModal = signal(false);

  constructor(public cartService: CartService) {}

  openCart() {
    this.showModal.set(true);
  }

  closeCart() {
    this.showModal.set(false);
  }

  removeItem(id: string) {
    this.cartService.removeFromCart(id);
  }

  updateQuantity(id: string, cantidad: number) {
    if (cantidad > 0) {
      this.cartService.updateQuantity(id, cantidad);
    }
  }

  checkout() {
    alert(`Compra realizada por $${this.cartService.getTotal().toFixed(2)}`);
    this.cartService.clearCart();
    this.showModal.set(false);
  }
}
