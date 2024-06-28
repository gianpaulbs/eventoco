import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IUserRequest, IUserResponse } from '../interfaces';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _baseUrl: string = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  public login(data: IUserRequest): Observable<IUserResponse> {
    return this.http.post<IUserResponse>(`${this._baseUrl}/login`, data);
  }
}
