import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AccauntService } from 'src/app/core/accaunt.service';
import { JwtUtil } from 'src/app/core/jwt.util';
import { User } from 'src/app/shared/model/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = environment.baseUrl+"/api/account";

  constructor(public jwtUtil: JwtUtil, public http: HttpClient, public accountService: AccauntService) { }



  login(loginParol: any): Observable<any> {
    return this.http.post<any>(this.api + "/signin", loginParol)
    .pipe( map((token)=>{     
        this.jwtUtil.save(token.token, loginParol.rememberMe);
        this.accountService.identity(true)
      })
    );
  }
  register(user: User): Observable<any> {
    return this.http.post<any>(this.api + "/signup", user);
  }
  logout(): void {
    this.jwtUtil.clear();
    this.accountService.authenticate(null);
  }
}
