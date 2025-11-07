import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Person } from '../../../shared/interfaces/person';
import { first } from 'rxjs';

@Component({
  selector: 'app-person-template-form',
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  templateUrl: './person-template-form.html',
  styleUrl: './person-template-form.css',
})
export class PersonTemplateForm {
  @Output() personOutput = new EventEmitter<Person>();
  @ViewChild('eForm', {static: false}) form:NgForm | undefined;

  onSubmit(value:any){
    console.log()
    this.personOutput.emit(value)
  }

  onSetValue() {
    this.form?.setValue({
      firstname: "K",
      lastname: "L",
      email: "kappalambda@gmail.com"
    })
  }
}