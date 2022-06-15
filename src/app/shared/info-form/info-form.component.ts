import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Plant } from 'src/app/plant/plant.model';
import { PlantService } from 'src/app/plant/plant.service';
import { Seed } from 'src/app/seed/seed.model';
import { SeedService } from 'src/app/seed/seed.service';
import { Wishlist } from 'src/app/wishlist/wishlist.model';
import { WishlistService } from 'src/app/wishlist/wishlist.service';

const target = document.getElementById('target');

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {
  myPlants: Plant[] = [];
  selectedPlant: Plant;
  plant: Plant;
  mySeeds: Seed[] = [];
  selectedSeed: Seed;
  seed: Seed;
  myWishlists: Wishlist[] = [];
  selectedWishlist: Wishlist;
  wishlist: Wishlist;
  infoForm: FormGroup;
  selectedFile: File;
  http: any;

  constructor(private plantService: PlantService, private seedService: SeedService, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    // form control
    this.infoForm = new FormGroup({
      'infoData': new FormGroup({
        'photoImagePath': new FormControl(null),
        'primaryCommonName': new FormControl(null, Validators.required),
        'formattedScientificName': new FormControl(null),
        'color': new FormControl(null),
        'duration': new FormControl(null),
        'source': new FormControl(null),
        'description': new FormControl(null),
        'uses': new FormControl(null),
        'conservationInfo': new FormControl(null),
        'notes': new FormControl(null),
      }),
    });

    // image control
    target.addEventListener('drop', (event) => {
      event.stopPropagation();
      event.preventDefault();
      return(event.dataTransfer.files);
    });
    target.addEventListener('dragover', (event) => {
      event.stopPropagation();
      event.preventDefault();
      event.dataTransfer.dropEffect = 'copy';
    });

    // plant control
    this.myPlants = this.plantService.getPlants();
    this.plantService.plantIndexChanged.subscribe((plants: Plant[]) => {
      this.myPlants = plants;
    });
    this.plantService.plantSelected.subscribe((plant: Plant) => {
      this.selectedPlant = plant;
    });
    // seed control
    this.mySeeds = this.seedService.getSeeds();
    this.seedService.seedIndexChanged.subscribe((seeds: Seed[]) => {
      this.mySeeds = seeds;
    });
    this.seedService.seedSelected.subscribe((seed: Seed) => {
      this.selectedSeed = seed;
    });
    // wishlist control
    this.myWishlists = this.wishlistService.getWishlists();
    this.wishlistService.wishlistIndexChanged.subscribe((wishlists: Wishlist[]) => {
      this.myWishlists = wishlists;
    });
    this.wishlistService.wishlistSelected.subscribe((wishlist: Wishlist) => {
      this.selectedWishlist = wishlist;
    });
  }

  // image handling functions
  onSelectImage(event) {
    return this.selectedFile = event.target.files[0];
  }
  onUploadFile(event) {
    this.http.post('', this.selectedFile)
      .subscribe(
        (event: any) => {
          if (this.selectedFile = event.target.files[0]) {

          }
        }
      );
  }
}
