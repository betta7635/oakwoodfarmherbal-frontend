import { Component, Input, OnInit } from '@angular/core';
import { Info } from '../shared/info-form/info.model';
import { Plant } from './plant.model';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  plant: Plant;
  @Input() info: Info;

  constructor() { }

  ngOnInit(): void {
  }

  onPlantSelected() {

  }

}
