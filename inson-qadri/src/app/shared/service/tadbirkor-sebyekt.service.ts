import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subyekt } from '../model/subyekt';

@Injectable({
  providedIn: 'root'
})
export class TadbirkorSebyektService {

  api = environment.baseUrl + "api/subject";
  constructor(public http:HttpClient) { }
  getAll():Observable<Subyekt[]> { 
    return this.http.get<Subyekt[]>(this.api);
  }
  create(user: Subyekt): Observable<Subyekt> {
    return this.http.post<Subyekt>(this.api, user);
  }
  update(user: Subyekt): Observable<Subyekt> {
    return this.http.put<Subyekt>(this.api, user);
  }
  deleteById(id: number):Observable<any> {
    return this.http.get(this.api + id);
  }
}
