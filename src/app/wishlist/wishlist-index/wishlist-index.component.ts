import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Wishlist } from '../wishlist.model';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist-index',
  templateUrl: './wishlist-index.component.html',
  styleUrls: ['./wishlist-index.component.css']
})
export class WishlistIndexComponent implements OnInit {
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
    this.wishlistService.wishlistSelected.subscribe((wishlist: Wishlist) => {
      this.selectedWishlist = wishlist;
    });
    this.wishlistService.wishlistIndexChanged.subscribe((wishlists: Wishlist[]) => {
      this.myWishlists = wishlists;
    });
  }

  onCreateWishlist() {
    // redirect to new wishlist form

  }

  onCancel() {
    // redirect to profile

  }
}
