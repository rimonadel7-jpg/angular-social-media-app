
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthSRV {

  private readonly httpClient = inject(HttpClient)
  private readonly router = inject(Router)

  signup(data: any): Observable<any> {
    return this.httpClient.post(environment.baseurl + '/users/signup', data)
  }

  signIn(data: any): Observable<any> {
    return this.httpClient.post(environment.baseurl + '/users/signin', data)
  }

  logOut() {
    this.router.navigate(['/login'])
    localStorage.removeItem('access-token')
  }

}