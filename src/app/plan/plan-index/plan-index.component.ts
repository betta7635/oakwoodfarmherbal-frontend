import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan.model';

@Component({
  selector: 'app-plan-index',
  templateUrl: './plan-index.component.html',
  styleUrls: ['./plan-index.component.css']
})
export class PlanIndexComponent implements OnInit {
  myPlans: Plan[] = [];
  selectedPlan: Plan;
  plan: Plan;

  constructor() { }

  ngOnInit(): void {
  }

  onCreatePlan() {

  }

  onCancel() {

  }

}
