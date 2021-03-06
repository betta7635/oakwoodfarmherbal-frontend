import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Wishlist } from '../wishlist.model';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-edit-wishlist',
  templateUrl: './edit-wishlist.component.html',
  styleUrls: ['./edit-wishlist.component.css']
})
export class EditWishlistComponent implements OnInit {
  myWishlists: Wishlist[] = [];
  selectedWishlist: Wishlist;
  wishlist: Wishlist;
  idx: number;
  index: number;

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
    // redirect to current wishlist id details
    this.wishlistService.wishlistSelected.emit(this.wishlist);
  }

  onDeleteWishlist(index) {
    this.wishlistService.deleteWishlist(index);
    // redirect to wishlist index

  }
}
