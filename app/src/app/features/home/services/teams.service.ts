import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ITeam } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private readonly _baseUrl: string = `${environment.apiBaseUrl}`;

  constructor(private _http: HttpClient) {}

  public getAll(): Observable<ITeam[]> {
    return this._http.get<ITeam[]>(`${this._baseUrl}/teams`);
  }
}
