import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Plant } from '../plant.model';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-index',
  templateUrl: './plant-index.component.html',
  styleUrls: ['./plant-index.component.css']
})
export class PlantIndexComponent implements OnInit {
  myPlants: Plant[] = [];
  selectedPlant: Plant;
  plant: Plant;
  idx: number;

  constructor(private plantService: PlantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.plant = this.plantService.getPlant(this.idx);
    });
    this.myPlants = this.plantService.getPlants();
    this.plantService.plantSelected.subscribe((plant: Plant) => {
      this.selectedPlant = plant;
    });
    this.plantService.plantIndexChanged.subscribe((plants: Plant[]) => {
      this.myPlants = plants;
    });
  }

// place on individual plant card
  // onPlantSelected(plant) {
  //   this.plantService.plantSelected.emit(this.plant);
  // }

  onCreatePlant() {
    // redirect to new plant form

  }

  onCancel() {
    // redirect to profile

  }
}
