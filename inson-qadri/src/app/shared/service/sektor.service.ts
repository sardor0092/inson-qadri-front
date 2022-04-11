import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sektor } from '../model/sektor';

@Injectable({
  providedIn: 'root'
})
export class SektorService {

  api = environment.baseUrl + "/api/sektor";
  constructor(public http:HttpClient) { }
  getAll():Observable<Sektor[]> { 
    return this.http.get<Sektor[]>(this.api);
  }
  create(user: Sektor): Observable<Sektor> {
    return this.http.post<Sektor>(this.api, user);
  }
  update(user: Sektor): Observable<Sektor> {
    return this.http.put<Sektor>(this.api, user);
  }
  deleteById(id: number):Observable<any> {
    return this.http.get(this.api + id);
  }
}
