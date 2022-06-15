import { Component, OnInit } from '@angular/core';
import { Seed } from '../seed.model';

@Component({
  selector: 'app-seed-index',
  templateUrl: './seed-index.component.html',
  styleUrls: ['./seed-index.component.css']
})
export class SeedIndexComponent implements OnInit {
  mySeeds: Seed[] = [];
  selectedSeed: Seed;
  seed: Seed;

  constructor() { }

  ngOnInit(): void {
  }

  onCreateSeed() {

    // redirect to new seed id form

  }

  onCancel() {

    // redirect to profile

  }
}
