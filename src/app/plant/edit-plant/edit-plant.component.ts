import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.css']
})
export class EditPlantComponent implements OnInit {
  myPlants: Plant[]= [];
  selectedPlant: Plant;
  plant: Plant;
  index: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSavePlant(plant) {

    // redirect to new plant id details

  }

  onCancel() {

    // redirect to current plant id details

  }

  onDeletePlant(index) {

    // redirect to plant index

  }
}
