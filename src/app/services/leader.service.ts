import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

import { Observable, of } from 'rxjs';
import { delay,map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
   private processHTTPMsgService: ProcessHTTPMsgService) { }
  getLeaders(): Observable<Leader[]> {
     return this.http.get<Leader[]>(baseURL + 'leadership')
        .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
     return this.http.get<Leader[]>(baseURL + 'leadership?featured=true').pipe(map(leaders => leaders[0]))
       .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeaderIds(): Observable<string[] | any> {

    return this.getLeaders().pipe(map(leaders => leaders.map(leader => leader.id)))
     .pipe(catchError(error => error));
 }

  putLeader(leader: Leader): Observable<Leader> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Leader>(baseURL + 'leadership/' + leader.id, leader, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

}
