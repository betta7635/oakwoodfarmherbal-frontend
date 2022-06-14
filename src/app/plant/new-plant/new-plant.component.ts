import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';

@Component({
  selector: 'app-new-plant',
  templateUrl: './new-plant.component.html',
  styleUrls: ['./new-plant.component.css']
})
export class NewPlantComponent implements OnInit {
  myPlants: Plant[]=[];
  selectedPlant: Plant;
  plant: Plant;

  constructor() { }

  ngOnInit(): void {
  }

  onSavePlant(plant) {

    // redirect to new plant id details

  }

  onCancel() {

    // redirect to plant index

  }
}
