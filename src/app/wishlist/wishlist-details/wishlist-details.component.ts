import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Info } from 'src/app/shared/info-form/info.model';
import { Wishlist } from '../wishlist.model';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist-details',
  templateUrl: './wishlist-details.component.html',
  styleUrls: ['./wishlist-details.component.css']
})
export class WishlistDetailsComponent implements OnInit {
  myWishlists: Wishlist[] = [];
  selectedWishlist: Wishlist;
  wishlist: Wishlist;
  idx: number;
  index: number;

  constructor(private wishlistservice: WishlistService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.wishlist = this.wishlistservice.getWishlist(this.idx);
    });
    this.myWishlists = this.wishlistservice.getWishlists();
    this.wishlistservice.wishlistSelected.subscribe((wishlist: Wishlist) => {
      this.selectedWishlist = wishlist;
    });
    this.wishlistservice.wishlistIndexChanged.subscribe((wishlists: Wishlist[]) => {
      this.myWishlists = wishlists;
    });
  }

  onEditWishlist(wishlist) {
    // redirect to current id edit form

  }

  onCancel() {
    // redirect to wishlist index

  }

  onDeleteWishlist(index) {
    this.wishlistservice.deleteWishlist(index);
    // redirect to wishlist index

  }
}
