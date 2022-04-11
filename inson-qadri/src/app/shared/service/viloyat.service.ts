import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tuman } from 'src/app/shared/model/tuman';
import { Viloyat } from 'src/app/shared/model/viloyat';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViloyatService {

  api = environment.baseUrl + "/api/viloyat";
  constructor(public http:HttpClient) { }
  getAll():Observable<Viloyat[]> { 
    return this.http.get<Tuman[]>(this.api);
  }
  create(user: Viloyat): Observable<Viloyat> {
    return this.http.post<Viloyat>(this.api, user);
  }
  update(user: Viloyat): Observable<Viloyat> {
    return this.http.put<Viloyat>(this.api, user);
  }
  deleteById(id: number):Observable<any> {
    return this.http.get(this.api + id);
  }
}
