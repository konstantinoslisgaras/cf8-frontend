import { Component } from '@angular/core';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Step5EventBind } from './components/step5-event-bind/step5-event-bind';
import { Person } from "./shared/interfaces/person";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Step2PersonTable, Step3PersonTableInput, Step4ForDirective, Step5EventBind, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "Konstantinos"

  // Step 3 input component
  personA:Person = {
    firstname: "Athina",
    lastname: "Alpha",
    email: "alphaalpha@gmail.com"
  }
    personB:Person = {
    firstname: "Reina",
    lastname: "R",
    email: "reina@gmail.com"
  }
}
