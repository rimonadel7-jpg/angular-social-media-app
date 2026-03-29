// import { HttpClient } from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from '../../../../environments/environment.development';

// @Injectable({
//   providedIn: 'root',
// })
// export class NotificationsSRV {
//   private readonly httpClient = inject(HttpClient)

//   getNotifications(): Observable<any> {
//     return this.httpClient.get(`${environment.baseurl}/notifications?unread=false&page=1&limit=10`)
//   }

//   getUnreadCount(): Observable<any> {
//     return this.httpClient.get(`${environment.baseurl}/notifications/unread-count`)
//   }
// }

// #######################################################################################

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NotificationsSRV {
  private readonly httpClient = inject(HttpClient)

  getNotifications(): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/notifications?unread=false&page=1&limit=10`)
  }

  getUnreadCount(): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/notifications/unread-count`)
  }

  markAsRead(notificationId: string): Observable<any> {
    return this.httpClient.patch(`${environment.baseurl}/notifications/${notificationId}/read`, {})
  }
}
