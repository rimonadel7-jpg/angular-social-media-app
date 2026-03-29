
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProfileSRV {
  private readonly httpClient = inject(HttpClient)

  getMyProfile(): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/users/profile-data`)
  }

  getMyPosts(userId: string): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/users/${userId}/posts`)
  }

  getBookmarks(): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/users/bookmarks`)
  }

  uploadPhoto(photo: File): Observable<any> {
    const formData = new FormData()
    formData.append('photo', photo)
    return this.httpClient.put(`${environment.baseurl}/users/upload-photo`, formData)
  }
}