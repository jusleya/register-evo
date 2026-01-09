import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/localStorage.service';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  name = '';
  email = '';
  error = '';

  constructor(private storage: StorageService, private router: Router) {}
}
