import { Component, inject } from '@angular/core';
import { login } from '../../model/interface/class/Client';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Token } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: login = new login();

  router = inject(Router);
  clientService = inject(ClientService);
  constructor(private http: HttpClient) { }
  isLoading: boolean = false; 


 
  onLogin() {
    this.isLoading = true; 
    this.clientService.login(this.loginObj).subscribe((response: any) => {
      const token = response;
      localStorage.setItem('token', token);
      this.isLoading = false; 
      this.router.navigate(['/client']);
    }, error => {
      console.error('Login failed', error);
      this.isLoading = false; 
      alert('Invalid username or password');
    });
  }

  onSamlLogin() {
    this.isLoading = true;
    setTimeout(() => {
      window.location.href = 'http://localhost:8090/saml2/authenticate';
      sessionStorage.setItem('samlAuthenticated', 'true');
    }, 1000);
  }

 
  onGitLogin() {
    this.isLoading = true;
    setTimeout(() => {
      window.location.href = 'http://localhost:8090/oauth2/authorization/github';
      sessionStorage.setItem('GitAuthenticated', 'true');
    }, 1000);
  }

  onGoogleLogin() {
    this.isLoading = true;
    setTimeout(() => {
      window.location.href = 'http://localhost:8090/oauth2/authorization/google';
      sessionStorage.setItem('GoogleAuthenticated', 'true');
    }, 1000);
  }

  
  onAzureLogin() {
    this.isLoading = true;
    setTimeout(() => {
      window.location.href = 'http://localhost:8087/oauth2/authorization/azure';
      sessionStorage.setItem('AzureAuthenticated', 'true');
    }, 1000);
  }

  // onLogin() {
  //   this.clientService.login(this.loginObj).subscribe((response: any) => {
  //     // Save the token in localStorage
  //     localStorage.setItem('token', response.token);
  //     // Redirect to client page after login
  //     this.router.navigate(['/client']);
  //   });
  //   }
  // onLogin() {
  //   this.clientService.login(this.loginObj).subscribe((response: any) => {
  //     const token = response;
  //     // console.log('Login Response:', response);
  //     localStorage.setItem('token', token);
  //     //sessionStorage.setItem('sessionActive', 'true'); 
  //     this.router.navigate(['/client']);
  //   }, error => {
  //     console.error('Login failed', error);
  //     alert('Invalid username or password');
  //   });
  // }
  

  // onSamlLogin() {
  //   window.location.href = 'http://localhost:8090/saml2/authenticate';
  //   sessionStorage.setItem('samlAuthenticated', 'true');   
  // }
  // onGitLogin(){
  //   window.location.href ="http://localhost:8090/oauth2/authorization/github";
  //   sessionStorage.setItem('GitAuthenticated', 'true');
  // }
  // onGoogleLogin(){
  //   window.location.href ="http://localhost:8090/oauth2/authorization/google";
  //   sessionStorage.setItem('GoogleAuthenticated', 'true');
  // }

  // onAzureLogin(){
  //   window.location.href ="http://localhost:8087/oauth2/authorization/azure";
  //   sessionStorage.setItem('GoogleAuthenticated', 'true');
  // }


}
