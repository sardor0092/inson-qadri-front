import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tuman } from '../model/tuman';

@Injectable({
  providedIn: 'root'
})
export class TumanService {
  api = environment.baseUrl + "/api/tuman";
  constructor(public http:HttpClient) { }
  getAll():Observable<Tuman[]> { 
    return this.http.get<Tuman[]>(this.api);
  }
  create(user: Tuman): Observable<Tuman> {
    return this.http.post<Tuman>(this.api, user);
  }
  update(user: Tuman): Observable<Tuman> {
    return this.http.put<Tuman>(this.api, user);
  }
  deleteById(id: number):Observable<any> {
    return this.http.get(this.api + id);
  }
}
