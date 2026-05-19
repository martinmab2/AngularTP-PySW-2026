import { Injectable, signal } from '@angular/core';

export interface CartItem {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  addToCart(item: CartItem) {
    const items = this.cartItems();
    const existingItem = items.find(i => i.id === item.id);
    
    if (existingItem) {
      existingItem.cantidad += item.cantidad;
    } else {
      items.push(item);
    }
    this.cartItems.set([...items]);
  }

  removeFromCart(id: string) {
    this.cartItems.set(this.cartItems().filter(i => i.id !== id));
  }

  updateQuantity(id: string, cantidad: number) {
    const items = this.cartItems();
    const item = items.find(i => i.id === id);
    if (item && cantidad > 0) {
      item.cantidad = cantidad;
      this.cartItems.set([...items]);
    }
  }

  getSubtotal(): number {
    return this.cartItems().reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  }

  getDiscount(): number {
    const totalItems = this.cartItems().reduce((sum, item) => sum + item.cantidad, 0);
    const subtotal = this.getSubtotal();

    if (totalItems > 4) {
      return subtotal * 0.35; // 35% discount
    } else if (totalItems > 2) {
      return subtotal * 0.20; // 20% discount
    }
    return 0;
  }

  getTotal(): number {
    return this.getSubtotal() - this.getDiscount();
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
