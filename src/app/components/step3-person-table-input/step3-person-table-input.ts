import { Component, Input, input } from '@angular/core';
import { Person } from '../../shared/interfaces/person';

@Component({
  selector: 'app-step3-person-table-input',
  imports: [],
  templateUrl: './step3-person-table-input.html',
  styleUrl: './step3-person-table-input.css',
})
export class Step3PersonTableInput {
  @Input() person: Person | undefined;

  user = {
    firstname: "Kappa",
    lastname: "Lambda",
    email: "konstantinoslisgaras@gmail.com"  
  }
}
