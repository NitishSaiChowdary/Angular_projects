import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // ✅ Check if user is logged in via JWT or SAML2
  if (authService.isLoggedIn() || authService.isSamlAuthenticated() || authService.isGitAuthenticated() || authService.isGoogleAuthenticated() || authService.isAzureAuthenticated()) {
    return true;
  } else {
    console.log('No token, navigating to login');
    router.navigate(['/login']);
    return false;
  }
};