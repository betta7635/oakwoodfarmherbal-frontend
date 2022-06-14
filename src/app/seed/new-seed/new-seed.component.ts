import { Component, OnInit } from '@angular/core';
import { Seed } from '../seed.model';

@Component({
  selector: 'app-new-seed',
  templateUrl: './new-seed.component.html',
  styleUrls: ['./new-seed.component.css']
})
export class NewSeedComponent implements OnInit {
  mySeeds: Seed[] = [];
  selectedSeed: Seed;
  seed: Seed;

  constructor() { }

  ngOnInit(): void {
  }

  onSaveSeed(seed) {

    // redirect to new seed id details

  }

  onCancel() {

    // redirect to seed index

  }
}
