import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class AccauntService {
  private userIdentity: User | null = null;
  private authenticationState = new ReplaySubject<User | null>(1);
  private userCache$?: Observable<User | null>;
  private baseApi = environment.baseUrl + "/api/auth";
  uploadProfileImage: any;
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  save(user: User): Observable<{}> {
    return this.http.put(this.baseApi, user);
  }

  
  savePassword(user: any): Observable<{}> {
    return this.http.put(this.baseApi + "/password", user);
  }

  public create(userlar: User): Observable<User> {
    return this.http.post<User>(this.baseApi, userlar);
  }

  public update(userlar: User): Observable<User> {
    return this.http.put<User>(this.baseApi, userlar);
  }
  authenticate(identity: User | null): void {
    
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
  }

  hasAnyAuthority(lavozimlar: string[] | string): boolean {
    if (!this.userIdentity) {
      return false;
    }
    if(!this.userIdentity.lavozimlar) return false;
    
    if (!Array.isArray(lavozimlar)) {
      lavozimlar = [lavozimlar];
    }
    return this.userIdentity.lavozimlar.some((lavozim: string) => lavozimlar.includes(lavozim));
  }

  identity(force?: boolean): Observable<User | null> {

    if (!this.userCache$ || force || !this.isAuthenticated()) {
      this.userCache$ = this.fetch().pipe(
        catchError((e) => {
          console.log('xatolik', e);

          return of(null)
        }),
        (res) => {
          console.log(res);
         res.subscribe(u=>{
                     this.authenticate(u);

         })
          return res;

        }
      );
    }
    return this.userCache$;
  }

  isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }

  getAuthenticationState(): Observable<User | null> {
    return this.authenticationState.asObservable();
  }

  // getImageUrl(): string {
  //   return this.userIdentity?.imageUrl ?? '';
  // }

  private fetch(): Observable<User> {
    console.log('fetching . . .');

    return this.http.get<User>(this.baseApi);

  }

  // private navigateToStoredUrl(): void {
  //   // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
  //   // if login is successful, go to stored previousState and clear previousState
  //   const previousUrl = this.stateStorageService.getUrl();
  //   if (previousUrl) {
  //     this.stateStorageService.clearUrl();
  //     this.router.navigateByUrl(previousUrl);
  //   }
  // }
}
