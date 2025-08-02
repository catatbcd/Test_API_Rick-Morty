import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
   ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/dashboard']);
    }
  }

  submit() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value as { email: string; password: string };

    this.auth.login({ email, password }).subscribe({
      next: (res) => {
  localStorage.setItem('token', 'true'); // o res.token si lo tienes
  this.router.navigate(['/dashboard']);
},
      error: err => {
        this.error = err.error?.error || 'Error al iniciar sesión';
      }
    });
  }
}
