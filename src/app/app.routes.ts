import { Routes } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';

export const routes: Routes = [
  {path: 'person-table-example', component: Step2PersonTable},
  {path: 'component-input-example', component: Step3PersonTableInput}
];
