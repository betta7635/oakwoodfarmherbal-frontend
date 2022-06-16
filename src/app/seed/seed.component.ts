import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Info } from '../shared/info-form/info.model';
import { Seed } from './seed.model';
import { SeedService } from './seed.service';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.css']
})
export class SeedComponent implements OnInit {
  mySeeds: Seed[] = [];
  seed: Seed;
  selectedSeed: Seed;
  info: Info;
  idx: number;

  constructor(private seedService: SeedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.seed = this.seedService.getSeed(this.idx);
    });
  }

  onSeedSelected(seed) {
    this.seedService.seedSelected.emit(this.seed);
  }
}
