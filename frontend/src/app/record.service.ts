import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  addRecord(record: any) {
    this.http.post('http://localhost:3000/api/records/new-record', record).pipe(map((data: any) => {
      if (data) return data
      else return null
    }))
  }

  updateRecord(docEmail: string, patientEmail: string, record: any) {
    this.http.post('http://localhost:3000/api/records/doctor/' + docEmail + '/update-record/' + patientEmail, record)
      .pipe(map((data: any) => {
        if (data) return data
        else return null
      }))
  }

  addVisit(visit: any) {
    this.http.post('http://localhost:3000/api/records/record' + visit.patientEmail + '/new-visit', visit).pipe(map((data: any) => {
      if (data) return data
      else return null
    }))
  }

  getRecordByPatientEmail(userEmail: string, patientEmail: string) {
    this.http.get('http://localhost:3000/api/records/user/' + userEmail + '/record/' + patientEmail)
      .pipe(map((data:any) => {
        if(data) return data
        else return null
      }))
  }

  getPatientRecordsForDoctor(docEmail: string){
    this.http.get('http://localhost:3000/api/records/doctor/' + docEmail)
      .pipe(map((data:any) => {
        if(data) return data
        else return null
      }))
  }

  getPatientVisitById(userEmail: string, patientEmail: string, visitId: string){
    this.http.get('http://localhost:3000/api/records/user/' + userEmail + '/record/' + patientEmail + '/visit/' + visitId)
      .pipe(map((data:any) => {
        if(data) return data
        else return null
      }))
  }


}
