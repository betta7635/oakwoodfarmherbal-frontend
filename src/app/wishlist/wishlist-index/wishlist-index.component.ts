import { Component, OnInit } from '@angular/core';
import { Wishlist } from '../wishlist.model';

@Component({
  selector: 'app-wishlist-index',
  templateUrl: './wishlist-index.component.html',
  styleUrls: ['./wishlist-index.component.css']
})
export class WishlistIndexComponent implements OnInit {
  myWishlists: Wishlist[] = [];
  selectedWishlist: Wishlist;
  wishlist: Wishlist;

  constructor() { }

  ngOnInit(): void {
  }

  onCreateWishlist() {

    // redirect to new wishlist form

  }

  onCancel() {

    // redirect to profile

  }
}
