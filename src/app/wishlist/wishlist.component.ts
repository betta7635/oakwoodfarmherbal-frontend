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

  }

  onWishlistSelected() {

  }

}
