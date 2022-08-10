import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/Person.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>('http://localhost:5000/person');
  }

  registerPerson(person: Person): Observable<Person>{
    return this.http.post<Person>('http://localhost:5000/person', person);
  }
}
