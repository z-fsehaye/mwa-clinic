import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleRecordComponent } from './single-record/single-record.component';
import { SingleVisitComponent } from './single-visit/single-visit.component';
import { SingleBillComponent } from './single-bill/single-bill.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SingleRecordComponent,
    SingleVisitComponent,
    SingleBillComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : "", component : SingleRecordComponent},
      {path: 'visit/:visitId', component: SingleVisitComponent}
    ]),
    ReactiveFormsModule
  ]
})
export class PatientModule { }
