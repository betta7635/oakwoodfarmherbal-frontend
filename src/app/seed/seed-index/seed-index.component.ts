import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Seed } from '../seed.model';
import { SeedService } from '../seed.service';

@Component({
  selector: 'app-seed-index',
  templateUrl: './seed-index.component.html',
  styleUrls: ['./seed-index.component.css']
})
export class SeedIndexComponent implements OnInit {
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
    this.seedService.seedSelected.subscribe((seed: Seed) => {
      this.selectedSeed = seed;
    });
    this.seedService.seedIndexChanged.subscribe((seeds: Seed[]) => {
      this.mySeeds = seeds;
    });
  }

  onCreateSeed() {
    // redirect to new seed id form

  }

  onCancel() {
    // redirect to profile

  }
}
