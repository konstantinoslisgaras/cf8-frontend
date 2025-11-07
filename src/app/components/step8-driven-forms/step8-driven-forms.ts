import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTemplateForm } from './person-template-form/person-template-form';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';
import { Step6SimpleDatatable } from '../step6-simple-datatable/step6-simple-datatable';

@Component({
  selector: 'app-step8-driven-forms',
  imports: [PersonTemplateForm, Step3PersonTableInput, Step6SimpleDatatable],
  templateUrl: './step8-driven-forms.html',
  styleUrl: './step8-driven-forms.css',
})
export class Step8DrivenForms {

  objectPerson: Person | undefined;
  arrayPerson: Person[] = [];

  onPerson(data: Person) {
    console.log("Father", data)
    this.objectPerson = data;
    this.arrayPerson.push(data);
  }
}