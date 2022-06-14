import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';

@Component({
  selector: 'app-plant-index',
  templateUrl: './plant-index.component.html',
  styleUrls: ['./plant-index.component.css']
})
export class PlantIndexComponent implements OnInit {
  myPlants: Plant[] = [];
  selectedPlant: Plant;
  plant: Plant;

  constructor() { }

  ngOnInit(): void {
  }

  onCreatePlant() {

    // redirect to new plant form

  }

  onCancel() {

    // redirect to profile

  }

}
