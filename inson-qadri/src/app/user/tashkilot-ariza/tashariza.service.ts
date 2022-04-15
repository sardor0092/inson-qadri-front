import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tashkilot } from 'src/app/shared/model/tashkilot';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TasharizaService {

  api = environment.baseUrl + "/api/people";
  api1 = environment.baseUrl + "/api/admin";
  
  constructor(public http:HttpClient) { }
  
  
  // create(user: Ariza): Observable<Ariza>  {
  //   return this.http.post<Ariza>(this.api, user);
  // }
  // update(user: Ariza): Observable<Ariza> {
  //   return this.http.put<Ariza>(this.api, user);
  // }
  // deleteById(id: number):Observable<any> {
  //   return this.http.get(this.api + id);
  // }


}
