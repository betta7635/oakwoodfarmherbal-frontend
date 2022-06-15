import { Component, Input, OnInit } from '@angular/core';
import { Info } from '../shared/info-form/info.model';
import { Seed } from './seed.model';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.css']
})
export class SeedComponent implements OnInit {
  mySeeds: Seed[] = [];
  seed: Seed;
  @Input() info: Info;

  constructor() { }

  ngOnInit(): void {
  }

  onSeedSelected() {

  }
}
