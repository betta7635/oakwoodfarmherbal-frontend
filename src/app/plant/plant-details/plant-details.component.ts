import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';

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

  constructor() { }

  ngOnInit(): void {
  }

  onEditPlant(plant) {

    // redirect to edit current plant id form

  }

  onCancel() {

    // redirect to plant index

  }

  onDeletePlant(index) {

    // redirect to plant index

  }

}
