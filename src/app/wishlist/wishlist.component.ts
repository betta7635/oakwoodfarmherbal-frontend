import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Info } from '../shared/info-form/info.model';
import { Wishlist } from './wishlist.model';
import { WishlistService } from './wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  myWishlists: Wishlist[] = [];
  wishlist: Wishlist;
  selectedWishlist: Wishlist;
  idx: number;
  info: Info;

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

  onWishlistSelected(wishlist) {
    this.wishlistService.wishlistSelected.emit(this.wishlist);
  }

}
