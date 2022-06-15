import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Seed } from '../seed.model';
import { SeedService } from '../seed.service';

@Component({
  selector: 'app-edit-seed',
  templateUrl: './edit-seed.component.html',
  styleUrls: ['./edit-seed.component.css']
})
export class EditSeedComponent implements OnInit {
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
    // redirect to current seed id details
    this.seedService.seedSelected.emit(this.seed);
  }

  onDeleteSeed(index) {
    this.seedService.deleteSeed(index);
    // redirect to seed index

  }
}
