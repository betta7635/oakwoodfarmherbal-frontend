import { EventEmitter, Injectable } from "@angular/core";
import { Wishlist } from "./wishlist.model";

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  wishlistSelected = new EventEmitter<Wishlist>();
  wishlistIndexChanged = new EventEmitter<Wishlist[]>();
  private myWishlists: Wishlist[] = [];

  getWishlists() {
    return this.myWishlists.slice();
  }

  getWishlist(idx: number) {
    return this.myWishlists.slice()[idx];
  }

  saveWishlist(wishlist: Wishlist) {
    this.myWishlists.push(wishlist);
    this.wishlistIndexChanged.emit(this.myWishlists.slice());
  }

  deleteWishlist(index: number) {
    if (index !== -1) {
      this.myWishlists.splice(index, 1);
      this.wishlistIndexChanged.emit(this.myWishlists.slice());
    }
  }
}
