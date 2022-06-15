import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Seed } from '../seed.model';
import { SeedService } from '../seed.service';

@Component({
  selector: 'app-seed-details',
  templateUrl: './seed-details.component.html',
  styleUrls: ['./seed-details.component.css']
})
export class SeedDetailsComponent implements OnInit {
  mySeeds: Seed[] = [];
  selectedSeed: Seed;
  seed: Seed;
  index: number;
  idx: number;

  constructor(private seedService: SeedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.seed = this.seedService.getSeed(this.idx);
    });
    this.mySeeds = this.seedService.getSeeds();
    this.seedService.seedSelected.subscribe((seed: Seed) => {
      this.selectedSeed = seed;
    });
    this.seedService.seedIndexChanged.subscribe((seeds: Seed[]) => {
      this.mySeeds = seeds;
    });
  }

  onEditSeed(seed) {
    // redirect to current seed it edit form

  }

  onCancel() {
    // redirect to seed index

  }

  onDeleteSeed(index) {
    this.seedService.deleteSeed(index);
    // redirect to seed index

  }
}
