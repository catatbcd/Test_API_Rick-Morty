import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';
  private tokenKey = 'access_token';

  // NUEVO: comportamiento reactivo del estado de sesión
  private sessionActiveSubject = new BehaviorSubject<boolean>(!!localStorage.getItem(this.tokenKey));
  sessionActive$ = this.sessionActiveSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, data).pipe(
      tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
        this.sessionActiveSubject.next(true); // Notifica que hay sesión
      })
    );
  }

  register(data: any) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/register`, data).pipe(
      tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
        this.sessionActiveSubject.next(true); // Notifica que hay sesión
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.sessionActiveSubject.next(false); // Notifica que ya no hay sesión
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}
