import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client, Register } from '../../model/interface/class/Client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(4)]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      { validator: this.passwordMatchValidator }
    );
  }

  // ✅ Password Matching Validator
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  registerObj: Register = new Register();
  clientObj: Client = new Client();
  clientService = inject(ClientService);
  onRegister() {
    if (this.registerForm.valid) {
      this.registerObj.username = this.registerForm.value.username;
      this.registerObj.password = this.registerForm.value.password;
      this.clientService.register(this.registerObj).subscribe(() => {
        alert('Successfully Registered!'); // Show success message
        this.router.navigate(['/client']); // Redirect to client page
      });
    }
  }
}
