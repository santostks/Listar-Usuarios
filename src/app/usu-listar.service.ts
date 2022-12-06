import { Usuario } from './usu-listar';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuService {

  private json = 'https://jsonplaceholder.typicode.com/users'

  getUsuarios() {
    return this.http.get<Usuario>(this.json)

  }

  constructor(private http: HttpClient) { }
}
