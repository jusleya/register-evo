import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/localStorage.service';
import { HeaderComponent } from '../../components/header/header';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  name = '';
  email = '';
  error = '';
  password = '';

  constructor(private storage: StorageService, private router: Router) {}

  getError(control: any, form: any, fieldLabel: string): string | null {
    if (!control || !control.errors) {
      return null;
    }

    if (control.errors['required'] && form.submitted) {
      return `${fieldLabel} é obrigatório`;
    }

    if (control.errors['minlength'] && control.touched) {
      const requiredLength = control.errors['minlength'].requiredLength;
      return `${fieldLabel} deve ter no mínimo ${requiredLength} caracteres`;
    }

    if (control.errors['pattern'] && control.touched) {
      return 'E-mail inválido';
    }

    return null;
  }

  isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  submit(form: any): void {
    if (form.invalid) {
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.error = 'E-mail inválido';
      return;
    }
    this.storage.save('user', {
      name: this.name,
      email: this.email,
      password: this.password,
    });

    // this.router.navigate(['/informacao']);
  }
}
