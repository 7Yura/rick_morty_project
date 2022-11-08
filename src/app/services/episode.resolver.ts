import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {EpisodeService} from "./episode.service";
import {IEpisode, IPagination} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class EpisodeResolver implements Resolve<IPagination<IEpisode>> {

  constructor(private episodeService: EpisodeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPagination<IEpisode>> {
    const page = route.queryParams['page']
    return this.episodeService.getAll(page);
  }
}
