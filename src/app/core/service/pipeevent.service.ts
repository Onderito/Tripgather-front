import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDataForm } from '../../models/eventData';

@Injectable({
  providedIn: 'root'
})
export class PipeeventService {

  constructor(private http : HttpClient) {}

  getEventPipe(search: Partial<EventDataForm>): Observable<EventDataForm[]> {
    let params = new HttpParams();
  
    if (search.localisation) {
      params = params.append('localisation', search.localisation);
    }
  
    if (search.gender) {
      params = params.append('gender', search.gender);
    }
  
    if (search.title) {
      params = params.append('title', search.title);
    }
  
    if (search.fromDate) {
      params = params.append('fromDate', search.fromDate);
    }
  
    if (search.toDate) {
      params = params.append('toDate', search.toDate);
    }
  
    return this.http.get<EventDataForm[]>('/events/filter', { params });
  }
  

}
