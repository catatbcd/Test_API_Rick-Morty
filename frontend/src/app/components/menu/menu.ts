import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent {
  sessionActive$: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService) {
    this.sessionActive$ = this.authService.sessionActive$;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
