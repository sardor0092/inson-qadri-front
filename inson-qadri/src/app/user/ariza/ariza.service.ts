import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ariza } from 'src/app/shared/model/ariza';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArizaService {
  api = environment.baseUrl + "/api/request";
  constructor(public http:HttpClient) { }
  getAll():Observable<Ariza[]> { 
    return this.http.get<Ariza[]>(this.api);
  }
  create(user: Ariza): Observable<Ariza> {
    return this.http.post<Ariza>(this.api, user);
  }
  update(user: Ariza): Observable<Ariza> {
    return this.http.put<Ariza>(this.api, user);
  }
  deleteById(id: number):Observable<any> {
    return this.http.get(this.api + id);
  }
}
