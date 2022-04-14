import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tuman } from 'src/app/shared/model/tuman';
import { Viloyat } from 'src/app/shared/model/viloyat';
import { environment } from 'src/environments/environment';
import { Mahalla } from '../model/mahalla';

@Injectable({
  providedIn: 'root'
})
export class ViloyatService {

  api = environment.baseUrl + "/api/territory";
  constructor(public http:HttpClient) { }
  getAll():Observable<Viloyat[]> { 
    return this.http.get<Viloyat[]>(this.api);
  }
  getAllTuman(id:number):Observable<Tuman[]> { 
    return this.http.get<Tuman[]>(this.api+"/"+id);
  }
  getAllSektor(id:number):Observable<Mahalla[]> { 
    return this.http.get<Mahalla[]>(this.api+"/tuman/"+id);
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
