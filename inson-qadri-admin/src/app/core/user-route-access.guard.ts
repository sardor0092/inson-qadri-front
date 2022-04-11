import { Injectable, isDevMode } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { StatsStoreService } from '../login/stats-store.service';
import { AccauntService } from './accaunt.service';



@Injectable({ providedIn: 'root' })
export class UserRouteAccessGuard implements CanActivate {
    constructor(private router: Router, private _snackBar: MatSnackBar, private accountService: AccauntService, private stateStorageService: StatsStoreService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.accountService.identity().pipe(
            map(account => {
                if (account) {
                    const authorities = route.data['authorities'];

                    if (!authorities || authorities.length === 0 || this.accountService.hasAnyAuthority(authorities)) {
                        return true;
                    }

                    if (isDevMode()) {
                        console.error('User has not any of required authorities: ', authorities);
                    }



                }
                this._snackBar.open("Sizga bu bo'limda ishlashga huquq berilmagan!", 'X ', {
                    duration: 4000,
                    verticalPosition: 'bottom',

                });
                this.stateStorageService.storeUrl(state.url);
                this.router.navigate(['/login']);
                return false;
            }


            )

        );
    }

}