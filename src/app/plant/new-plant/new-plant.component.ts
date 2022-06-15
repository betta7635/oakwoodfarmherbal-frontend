import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Plant } from '../plant.model';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-new-plant',
  templateUrl: './new-plant.component.html',
  styleUrls: ['./new-plant.component.css']
})
export class NewPlantComponent implements OnInit {
  myPlants: Plant[]=[];
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
    this.plantService.plantIndexChanged.subscribe((plants: Plant[]) => {
      this.myPlants = plants;
    });
    this.plantService.plantSelected.subscribe((plant: Plant) => {
      this.selectedPlant = plant;
    });
  }

  onSavePlant(plant) {
    this.plantService.savePlant(plant);
    // redirect to new plant id details
    this.plantService.plantSelected.emit(this.plant);
  }

  onCancel() {
    // redirect to plant index

  }
}
