import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Wishlist } from '../wishlist.model';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-new-wishlist',
  templateUrl: './new-wishlist.component.html',
  styleUrls: ['./new-wishlist.component.css']
})
export class NewWishlistComponent implements OnInit {
  myWishlists: Wishlist[] = [];
  selectedWishlist: Wishlist;
  wishlist: Wishlist;
  idx: number;

  constructor(private wishlistService: WishlistService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.wishlist = this.wishlistService.getWishlist(this.idx);
    });
    this.myWishlists = this.wishlistService.getWishlists();
    this.wishlistService.wishlistIndexChanged.subscribe((wishlists: Wishlist[]) => {
      this.myWishlists = wishlists;
    });
    this.wishlistService.wishlistSelected.subscribe((wishlist: Wishlist) => {
      this.selectedWishlist = wishlist;
    });
  }

  onSaveWishlist(wishlist) {
    this.wishlistService.saveWishlist(wishlist);
    // redirect to new wishlist id details
    this.wishlistService.wishlistSelected.emit(this.wishlist);
  }

  onCancel() {
    // redirect to wishlist index

  }
}
