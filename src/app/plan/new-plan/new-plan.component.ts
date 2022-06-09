import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan.model';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.css']
})
export class NewPlanComponent implements OnInit {
  plan: Plan;

  constructor() { }

  ngOnInit(): void {
  }

  onSavePlan(plan) {

  }

  onCancel() {

  }

}
