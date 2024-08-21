import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('jwtinterceptor');
  const token = localStorage.getItem('token');
  let clonedRequest = req;
  if (token) {
    clonedRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
  }
  return next(clonedRequest);
};
