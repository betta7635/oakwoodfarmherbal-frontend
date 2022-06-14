import { Component, OnInit } from '@angular/core';
import { Seed } from '../seed.model';

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

  constructor() { }

  ngOnInit(): void {
  }

  onEditSeed(seed) {

    // redirect to current seed it edit form

  }

  onCancel() {

    // redirect to seed index

  }

  onDeleteSeed(index) {

    // redirect to seed index

  }
}
