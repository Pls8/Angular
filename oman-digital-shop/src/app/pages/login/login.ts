import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { LoginRequest } from '../../models/user.model';


@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})



export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  credentials: LoginRequest = { email: '', password: '' };
  loading = false;
  error = '';

  onSubmit(): void {
    this.loading = true;
    this.error = '';
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.loading = false;

        if (response.success) { this.router.navigate(['/']); }
        else { this.error = response.message; }
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Login failed. Please check your credentials.';
        console.error(err);
      }
    });
  }

  
}
