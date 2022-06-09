import { Component, OnInit } from '@angular/core';
import { Plan } from './plan.model';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  plan: Plan;

  constructor() { }

  ngOnInit(): void {
  }

  onPlanSelected() {

  }

}
