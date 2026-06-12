import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecopResponse } from '../../models/contrato.model';

@Injectable({
  providedIn: 'root' // <-- Esto le dice a Angular que es un servicio global inyectable
})
export class SecopService {
  private apiUrl = 'http://localhost:3000/datos';

  constructor(private http: HttpClient) {}

  /**
   * Consume la API del backend de Node.js solicitando bloques de 40 registros
   */
  getContratos(page: number, size: number = 40): Observable<SecopResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<SecopResponse>(this.apiUrl, { params });
  }
}
