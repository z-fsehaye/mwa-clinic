import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  addRecord(record: any) {
    return this.http.post('http://localhost:3000/api/records', record)
  }

  updateRecord(docEmail: string, patientEmail: string, record: any) {
    this.http.post('http://localhost:3000/api/records/doctor/' + docEmail + '/update-record/' + patientEmail, record)
      .pipe(map((data: any) => {
        if (data) return data
        else return null
      }))
  }

  addVisit(visit: any, pEamil:any) {
    let pVisit;
    this.http.post('http://localhost:3000/api/records/record/' + pEamil + '/new-visit', visit).subscribe((data:any) => {
      pVisit = data
    })
    return pVisit
  }

  getRecordByPatientEmail(userEmail: string, patientEmail: string) {
    return this.http.get('http://localhost:3000/api/records/record/' + patientEmail)
    
  }

  getPatientRecordsForDoctor(docEmail: string) {
    return this.http.get('http://localhost:3000/api/records/doctor/' + docEmail)
  }

  getPatientVisitById(userEmail: string, patientEmail: string, visitId: string) {
    this.http.get('http://localhost:3000/api/records/user/' + userEmail + '/record/' + patientEmail + '/visit/' + visitId)
      .pipe(map((data: any) => {
        if (data) return data
        else return null
      }))
  }


}
