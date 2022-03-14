import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordListComponent } from './record-list/record-list.component';
import { SingleRecordComponent } from './single-record/single-record.component';
import { RecordFormComponent } from './record-form/record-form.component';
import { VisitFormComponent } from './visit-form/visit-form.component';
import { BillFormComponent } from './bill-form/bill-form.component';
import { SingleVisitComponent } from './single-visit/single-visit.component';
import { SingleBillComponent } from './single-bill/single-bill.component';



@NgModule({
  declarations: [
    RecordListComponent,
    SingleRecordComponent,
    RecordFormComponent,
    VisitFormComponent,
    BillFormComponent,
    SingleVisitComponent,
    SingleBillComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DoctorModule { }
