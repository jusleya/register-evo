import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { StorageService } from '../../services/localStorage.service';
import { HeaderComponent } from '../../components/header/header';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [FormsModule, HeaderComponent],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  private storage = inject(StorageService);
  private router = inject(Router);
  name = '';
  email = '';
  error = '';
  password = '';

  getError(control: NgModel | null, form: NgForm, fieldLabel: string): string | null {
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

  submit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.storage.save('user', {
      name: this.name,
      email: this.email,
      password: this.password,
    });

    this.router.navigate(['/informacoes']);
  }
}
