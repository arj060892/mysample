import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserObject } from '../models/user.model';
import { Utility } from '../utility';
import { PostObject } from '../models/posts.model';
@Injectable()
export class PostHelperService {

  constructor(private http: HttpClient) { }
  _postCounter = 0;

  get postCount(): number {
    return this._postCounter;
  }

  set postCount(count: number) {
    this._postCounter = count;
  }

  getUserDetails(): Observable<UserObject[]> {
    return this.http.get<UserObject[]>(Utility.getAPIUrl('users'));
  }

  getPosts(): Observable<PostObject[]> {
    return this.http.get<PostObject[]>(Utility.getAPIUrl('posts'));
  }
}
