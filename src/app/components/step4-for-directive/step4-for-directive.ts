import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';

@Component({
  selector: 'app-step4-for-directive',
  imports: [Step3PersonTableInput],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {

  person: Person[] = [
  {"firstname":"Konstantinos","lastname":"Lisgaras","email":"kappalambda@google.edu"},    
  {"firstname":"Karlene","lastname":"Angood","email":"kangood0@mit.edu"},
  {"firstname":"Franchot","lastname":"Souster","email":"fsouster1@usatoday.com"},
  {"firstname":"Damian","lastname":"Formby","email":"dformby2@ox.ac.uk"},
  {"firstname":"Harlene","lastname":"Poland","email":"hpoland3@nature.com"},
  {"firstname":"Junette","lastname":"Holley","email":"jholley4@usnews.com"},
  {"firstname":"Heida","lastname":"Wildish","email":"hwildish5@tiny.cc"},
  {"firstname":"Corey","lastname":"Wones","email":"cwones6@spotify.com"},
  {"firstname":"Court","lastname":"Kelemen","email":"ckelemen7@wikia.com"},
  {"firstname":"Haywood","lastname":"Peploe","email":"hpeploe8@goo.gl"},
  {"firstname":"Bobina","lastname":"Trime","email":"btrime9@addthis.com"},
  {"firstname":"Edgardo","lastname":"Metcalf","email":"emetcalfa@patch.com"},
  {"firstname":"Quintilla","lastname":"Tuckerman","email":"qtuckermanb@mail.ru"},
  {"firstname":"Brook","lastname":"Tommasetti","email":"btommasettic@bravesites.com"},
  {"firstname":"Iseabal","lastname":"Dionsetti","email":"idionsettid@chron.com"},
  {"firstname":"Wally","lastname":"Dagg","email":"wdagge@un.org"},
  {"firstname":"Holt","lastname":"Coom","email":"hcoomf@gov.uk"},
  {"firstname":"Odette","lastname":"Eouzan","email":"oeouzang@google.cn"},
  {"firstname":"Blane","lastname":"Bytheway","email":"bbythewayh@xing.com"},
  {"firstname":"Emmanuel","lastname":"Clemmow","email":"eclemmowi@ihg.com"},
  {"firstname":"Vonnie","lastname":"Petegre","email":"vpetegrej@slate.com"}
]}