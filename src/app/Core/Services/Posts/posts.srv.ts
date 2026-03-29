import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PostsSRV {
  private readonly httpClient = inject(HttpClient)

  getAllPosts(): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/posts`)
  }

  createPost(data: any): Observable<any> {
    return this.httpClient.post(`${environment.baseurl}/posts`, data)
  }

  getSinglePost(postId: any): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/posts/${postId}`)
  }

  likeUnlikePost(postId: string): Observable<any> {
    return this.httpClient.put(`${environment.baseurl}/posts/${postId}/like`, {})
  }
}