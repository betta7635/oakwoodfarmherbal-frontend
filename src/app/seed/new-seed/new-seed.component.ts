import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Seed } from '../seed.model';
import { SeedService } from '../seed.service';

@Component({
  selector: 'app-new-seed',
  templateUrl: './new-seed.component.html',
  styleUrls: ['./new-seed.component.css']
})
export class NewSeedComponent implements OnInit {
  mySeeds: Seed[] = [];
  selectedSeed: Seed;
  seed: Seed;
  idx: number;

  constructor(private seedService: SeedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.seed = this.seedService.getSeed(this.idx);
    });
    this.mySeeds = this.seedService.getSeeds();
    this.seedService.seedIndexChanged.subscribe((seeds: Seed[]) => {
      this.mySeeds = seeds;
    });
    this.seedService.seedSelected.subscribe((seed: Seed) => {
      this.selectedSeed = seed;
    });
  }

  onSaveSeed(seed) {
    this.seedService.saveSeed(seed);
    // redirect to new seed id details
    this.seedService.seedSelected.emit(this.seed);
  }

  onCancel() {
    // redirect to seed index

  }
}
