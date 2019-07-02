import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService implements Resolve<any>
{
    routeParams: any;
    games: any;

    constructor(
        private _httpClient: HttpClient
    ) {
      this.getGames().subscribe(data => {
        this.games = data;
        console.log('constructor this.games', this.games);
      });
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<any> | Promise<any> | any {

        console.log('route', route);
        console.log('state', state);

        return of(this.games);
    }

    getGames(): Observable<any> {
        const games$ = this._httpClient.get(`assets/infos.json`);

        return games$;
    }
}

