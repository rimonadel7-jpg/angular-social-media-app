
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CommentsSRV {
  private readonly httpClient = inject(HttpClient)

  getPostsComments(postsId: any): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/posts/${postsId}/comments`)
  }

  CreatePostsComments(postsId: any, data: any): Observable<any> {
    return this.httpClient.post(`${environment.baseurl}/posts/${postsId}/comments`, data)
  }
}