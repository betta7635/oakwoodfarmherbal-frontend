import { EventEmitter, Injectable } from "@angular/core";
import { Seed } from "./seed.model";


@Injectable({
  providedIn: 'root',
})
export class SeedService {
  seedSelected = new EventEmitter<Seed>();
  seedIndexChanged = new EventEmitter<Seed[]>();
  private mySeeds: Seed[] = [];

  getSeeds() {
    return this.mySeeds.slice();
  }

  getSeed(idx: number) {
    return this.mySeeds.slice()[idx];
  }

  saveSeed(seed: Seed) {
    this.mySeeds.push(seed);
    this.seedIndexChanged.emit(this.mySeeds.slice());
  }

  deleteSeed(index: number) {
    if (index !== -1) {
      this.mySeeds.splice(index, 1);
      this.seedIndexChanged.emit(this.mySeeds.slice());
    }
  }
}
