import { Component, OnInit } from '@angular/core';
import { Seed } from '../seed.model';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSaveSeed(seed) {
     // onsubmit(ngsubmit)??
    // redirect to new seed id details

  }

  onCancel() {

    // redirect to current seed id details

  }

  onDeleteSeed(index) {

    // redirect to seed index

  }
}
