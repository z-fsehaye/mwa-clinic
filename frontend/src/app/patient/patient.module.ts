import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleRecordComponent } from './single-record/single-record.component';
import { SingleVisitComponent } from './single-visit/single-visit.component';
import { SingleBillComponent } from './single-bill/single-bill.component';



@NgModule({
  declarations: [
    SingleRecordComponent,
    SingleVisitComponent,
    SingleBillComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientModule { }
