import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private client: HttpClient) { }

  addRecord(record: any) {
    return this.client.post('http://localhost:3000/api/records', record)
  }

  updateRecord(patientEmail: string, record: any) {

    return this.client.put('http://localhost:3000/api/records/record/' + patientEmail, record)

    // this.client.post('http://localhost:3000/api/records/doctor/' + docEmail + '/update-record/' + patientEmail, record)
    //   .pipe(map((data: any) => {
    //     if (data) return data
    //     else return null
    //   }))
  }

  addVisit(visit: any, pEamil:any) {
    return this.client.post('http://localhost:3000/api/records/record/' + pEamil + '/new-visit', visit)
  }

  getRecordByPatientEmail(patientEmail: string) {
    return this.client.get('http://localhost:3000/api/records/record/' + patientEmail)
    
  }

  getPatientRecordsForDoctor() {
    return this.client.get('http://localhost:3000/api/records')
  }

  getPatientVisitById(patientEmail: any, visitId: string) {
    return this.client.get('http://localhost:3000/api/records/record/' + patientEmail + '/visit/' + visitId)
  }


}
