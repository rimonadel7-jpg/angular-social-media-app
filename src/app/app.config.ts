import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { headerInterceptor } from './Core/Interceptors/header/header-interceptor';
import { errorInterceptor } from './Core/Interceptors/Error/error-interceptor';
import{provideAnimations} from '@angular/platform-browser/animations'
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { loadingInterceptor } from './Core/Interceptors/Loading/loading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(NgxSpinnerModule),
    provideAnimations(),
     provideToastr(), 
    provideHttpClient(withFetch(), withInterceptors([headerInterceptor, errorInterceptor,loadingInterceptor])),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};




// import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
// import { routes } from './app.routes';
// import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
// import { headerInterceptor } from './Core/Interceptors/header/header-interceptor';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(
//       routes,
//       withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
//       withViewTransitions(),
//       withHashLocation(),
//     ),
//     provideHttpClient(withFetch(), withInterceptors([headerInterceptor])),
//   ]
// };