import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { httpInterceptor } from './httpInterceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
];
