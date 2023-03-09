import { Component } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payment';
  // cartItems = [
  //   {
  //     name: 'Product Name',
  //     imageUrl: 'https://via.placeholder.com/150x150',
  //     quantity: 2,
  //     price: 19.99
  //   },
  //   {
  //     name: 'Another Product Name',
  //     imageUrl: 'https://via.placeholder.com/150x150',
  //     quantity: 1,
  //     price: 9.99
  //   }
  // ];

  // product = {
  //   name: 'Product Name',
  //   imageUrl: 'https://via.placeholder.com/300x300',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet ex non sapien accumsan convallis.',
  //   price: 19.99
  // };

  // get total() {
  //   return this.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  // }
  // constructor(private router: Router) {}

  // redirectToCheckout() {
  //   this.router.navigate(['/checkout']);
  // }

  // applePay() {
  //   window.open('https://applepay.com', '_blank');
  // }

  // paypal() {
  //   window.open('https://paypal.com', '_blank');
  // }
}

