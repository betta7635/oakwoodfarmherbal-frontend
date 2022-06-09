import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant/plant.model';
import { Seed } from '../seed/seed.model';
import { Info } from '../shared/info-form/info.model';
import { Wishlist } from '../wishlist/wishlist.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  plant: Plant;
  seed: Seed;
  wishlist: Wishlist;
  info: Info;

  constructor() { }

  ngOnInit(): void {
  }

  onSavePlant(plant) {

    // redirect to plant index

  }

  onSaveSeed(seed) {

  //  redirect to seed index

  }

  onSaveWishlist(wishlist) {

    // redirect to wishlist index

  }
}
