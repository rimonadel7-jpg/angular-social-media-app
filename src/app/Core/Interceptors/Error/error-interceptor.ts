import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
 let toastr=inject(ToastrService)
  // REQUEST 

  // logic of handling error
  return next(req).pipe(catchError(err => {

    // console.log('ERROR FROM INTERCEPTOR',err)
// toastr.error(err.error.message,'route linked posts')

    return throwError(() => err)

  }))
};



