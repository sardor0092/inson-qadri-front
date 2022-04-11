import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mahalla } from '../model/mahalla';

@Injectable({
  providedIn: 'root'
})
export class MahallaService {

  api = environment.baseUrl + "/api/mahalla";
  constructor(public http:HttpClient) { }
  getAll():Observable<Mahalla[]> { 
    return this.http.get<Mahalla[]>(this.api);
  }
  create(user: Mahalla): Observable<Mahalla> {
    return this.http.post<Mahalla>(this.api, user);
  }
  update(user: Mahalla): Observable<Mahalla> {
    return this.http.put<Mahalla>(this.api, user);
  }
  deleteById(id: number):Observable<any> {
    return this.http.get(this.api + id);
  }
}
