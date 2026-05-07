import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router);

  onLogout(){
    localStorage.removeItem('token');
   // sessionStorage.removeItem('samlAuthenticated');
    this.router.navigate(['/login']);

  }
  onRegister(){
    this.router.navigate(['/register']);
  }

}
