import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { privateDecrypt } from 'crypto';
import { Router } from '@angular/router';



export const authGuard: CanActivateFn = (route, state) => {

  let platformId = inject(PLATFORM_ID)
  let router=inject(Router)

if (isPlatformBrowser(platformId)) {
    if(localStorage.getItem('access-token')!=null){
    return true
  }
  else{
         
    return router.parseUrl('/login')
  }
}
else{
  return true
}
};
