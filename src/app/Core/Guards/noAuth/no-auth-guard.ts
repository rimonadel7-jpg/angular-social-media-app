import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { privateDecrypt } from 'crypto';
import { Router } from '@angular/router';


export const noAuthGuard: CanActivateFn = (route, state) => {
  let platformId = inject(PLATFORM_ID)
  let router=inject(Router)

if (isPlatformBrowser(platformId)) {
    if(localStorage.getItem('access-token')!=null){
    return  router.parseUrl('/home')
  }
  else{
         
    return true
  }
}
else{
  return true
}
};
