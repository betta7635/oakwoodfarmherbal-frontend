import { Component, OnInit } from '@angular/core';
import { PlanComponent } from '../plan.component';
import { Plan } from '../plan.model';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css']
})
export class EditPlanComponent implements OnInit {
  selectedPlan: Plan;
  plan: Plan;
  index: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSavePlan(plan) {

    // redirect to current plan id

  }

  onCancel() {
    // redirect to current plan id

  }

  onDeletePlan(index) {

    // redirect to plan index

  }

}
