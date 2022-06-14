import { EventEmitter, Injectable } from "@angular/core";
import { Plant } from "./plant.model";


@Injectable({
  providedIn: 'root',
})
export class PlantService {
  plantSelected = new EventEmitter<Plant>();
  plantIndexChanged = new EventEmitter<Plant[]>();
  private myPlants: Plant[] = [];

  getPlants() {
    return this.myPlants.slice();
  }

  getPlant(idx: number) {
    return this.myPlants.slice()[idx];
  }

  savePlant(plant: Plant) {
    this.myPlants.push(plant);
    this.plantIndexChanged.emit(this.myPlants.slice());
  }

  deletePlant(index: number) {
    if (index !== -1) {
      this.myPlants.splice(index, 1);
      this.plantIndexChanged.emit(this.myPlants.slice());
    }
  }
}
