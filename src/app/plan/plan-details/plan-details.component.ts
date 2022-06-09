import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan.model';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {
  selectedPlan: Plan;
  index: number;

  constructor() { }

  ngOnInit(): void {
  }

  onEditPlan() {

  }

  onCancel() {

  }

  onDeletePlan(index) {

  }
}
