import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from '../plant/plant.model';
import { Seed } from '../seed/seed.model';
import { Info } from '../shared/info-form/info.model';
import { InfoService } from '../shared/info-form/info.service';
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
  index: number;
  idx: number;

  constructor(private infoservice: InfoService, private router: Router) { }

  ngOnInit(): void {
  }

  onSavePlant(plant) {

    // do not redirect

  }

  onSaveSeed(seed) {

  // do not redirect

  }

  onSaveWishlist(wishlist) {

    // do not redirect

  }

  onCancel() {
    // redirect to profile
    this.router.navigate(['profile']);
  }
}
