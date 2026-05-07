import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { DesignationComponent } from './components/designation/designation.component';
import { MasterComponent } from './components/master/master.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Saml2';

  authservice = inject(AuthService)

  // @HostListener('window:beforeunload', ['$event'])
  // clearSessionOnClose(event: Event) {
  //   this.authservice.logout(); // Clears session on window close
  // }

  private isReload = false;
  router = inject(Router);

  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload(event: Event) {
    if (!this.isReload) {
      this.authservice.logout(); 
      //localStorage.removeItem('authToken');
    }
  }

  @HostListener('window:load', ['$event'])
  handleLoad(event: Event) {
    this.isReload = true; 
    //sessionStorage.setItem('sessionActive', 'true');
  }

 }

