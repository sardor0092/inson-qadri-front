import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tashkilot } from 'src/app/shared/model/tashkilot';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TashkilotService {
  api = environment.baseUrl + "/api/admin";
  constructor(public http:HttpClient) { } 
  getAll():Observable<Tashkilot[]> { 
    return this.http.get<Tashkilot[]>(this.api+"/tashkilot");
  }
  create(user: Tashkilot): Observable<Tashkilot> {
    return this.http.post<Tashkilot>(this.api, user);
  }
  update(user: Tashkilot): Observable<Tashkilot> {
    return this.http.put<Tashkilot>(this.api, user);
  }
  deleteById(id: number):Observable<any> {
    return this.http.get(this.api + id);
  }
}
