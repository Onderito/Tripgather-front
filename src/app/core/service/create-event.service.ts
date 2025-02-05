import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { EventDTO } from '../../models/event';
import { CategoryDTO } from '../../models/category';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CreateEventService {
  private apiUrl = `${environment.apiUrl}/events`;
  private apiUrl2 = `${environment.apiUrl2}/categories`;
  private categoriesUrl = `${environment.apiUrl2}/categories`;

  constructor(private http: HttpClient) {}

  // API call for Step One - Create Event
  createEvent(eventDTO: EventDTO): Observable<EventDTO> {
    return this.http.post<EventDTO>('/events', eventDTO);
  }

  // API call for Step Two - Upload Image
  uploadImage(imageData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/image`, imageData);
  }

  // API call for Step Three - Fetch Categories
  getCategories(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>('/categories');
  }

  // API call to get all events (GET request)
  getAllEvents(): Observable<EventDTO[]> {
    return this.http.get<EventDTO[]>('/events').pipe(
      tap((res) =>{
        console.log(res);
      })
    )
  }

  getEventById(id : number) : Observable<any> {
    return this.http.get<any>(`/events/user/${id}`).pipe(
      catchError((error) => {
        console.error('Erreur lors de la mise à jour de l\'utilisateur', error);
        return of(null);
      })
    )
  }

  // API call to get a single event by ID (GET request)
  // getEventById(id: number): Observable<EventDTO> {
  //   return this.http.get<EventDTO>(`${this.apiUrl}/${id}`);
  // }

  // API call for updating an event (PUT request)
  updateEvent(id: number, eventDTO: EventDTO): Observable<EventDTO> {
    return this.http.put<EventDTO>(`${this.apiUrl}/${id}`, eventDTO);
  }

  // API call for deleting an event (DELETE request)
  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
