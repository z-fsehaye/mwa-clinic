import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordListComponent } from './record-list/record-list.component';
import { SingleRecordComponent } from './single-record/single-record.component';
import { RecordFormComponent } from './record-form/record-form.component';
import { VisitFormComponent } from './visit-form/visit-form.component';
import { BillFormComponent } from './bill-form/bill-form.component';
import { SingleVisitComponent } from './single-visit/single-visit.component';
import { SingleBillComponent } from './single-bill/single-bill.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';



@NgModule({
  declarations: [
    RecordListComponent,
    SingleRecordComponent,
    RecordFormComponent,
    VisitFormComponent,
    BillFormComponent,
    SingleVisitComponent,
    SingleBillComponent,
    DoctorHomeComponent ,
    VisitFormComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : '', component : DoctorHomeComponent},
      {path : 'add-record',component : RecordFormComponent},
      {path : 'add-visit',component : VisitFormComponent},
      {path : 'list-records',component : RecordListComponent},
      {path : 'list-records/record/:email', component : SingleRecordComponent}
      
    ]),
    ReactiveFormsModule
  ],
  
})
export class DoctorModule { }
