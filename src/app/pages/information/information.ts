import { Component, OnInit, inject } from '@angular/core';
import { StorageService } from '../../services/localStorage.service';
import { HeaderComponent } from '../../components/header/header';

@Component({
  selector: 'app-information',
  imports: [HeaderComponent],
  templateUrl: './information.html',
  styleUrls: ['./information.css'],
})
export class InformationComponent implements OnInit {
  private storage = inject(StorageService);
  user: { name: string; email: string; password: string } | null = null;

  ngOnInit(): void {
    this.user = this.storage.get<{ name: string; email: string; password: string }>('user');
  }
}
