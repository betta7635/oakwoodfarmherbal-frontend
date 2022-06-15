import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Plant } from '../plant.model';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent implements OnInit {
  myPlants: Plant[] = [];
  plant: Plant;
  selectedPlant: Plant;
  index: number;
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

  onEditPlant(plant) {
    // redirect to edit current plant id form

  }

  onCancel() {
    // redirect to plant index

  }

  onDeletePlant(index) {
    this.plantService.deletePlant(index);
    // redirect to plant index

  }
}
