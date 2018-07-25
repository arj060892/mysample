import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserObject } from './models/user.model';
import { Utility } from './utility';
@Injectable()
export class PostHelperService {

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<UserObject[]> {
    return this.http.get<UserObject[]>(Utility.getAPIUrl('users'));
  }
}
