import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  router = inject(Router);

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('samlAuthenticated');
    sessionStorage.removeItem('GitAuthenticated');
    sessionStorage.removeItem('GoogleAuthenticated');
    sessionStorage.removeItem('AzureAuthenticated');
    this.router.navigate(['/login']);
  }

  isSamlAuthenticated(): boolean {
    return !!sessionStorage.getItem('samlAuthenticated');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null;
  }
  isGitAuthenticated(): boolean {
    return !!sessionStorage.getItem('GitAuthenticated');
  }

  isGoogleAuthenticated(): boolean {
    return !!sessionStorage.getItem('GoogleAuthenticated');
  }
  isAzureAuthenticated():boolean{
    return !!sessionStorage.getItem('AzureAuthenticated');
  }

  checkOAuthRedirect() {
    const token = new URLSearchParams(window.location.search).get('token');
    const provider = new URLSearchParams(window.location.search).get('provider'); // Get provider (Git/Google)

    if (token) {
      localStorage.setItem('token', token);

      if (provider === 'saml') {
        sessionStorage.setItem('samlAuthenticated', 'true');
      } else if (provider === 'github') {
        sessionStorage.setItem('GitAuthenticated', 'true');
      } else if (provider === 'google') {
        sessionStorage.setItem('GoogleAuthenticated', 'true');
      }else if(provider === 'azure'){
        sessionStorage.setItem('AzureAuthenticated', 'true');
      }
      this.router.navigate(['/client']);
    }
  }
}
