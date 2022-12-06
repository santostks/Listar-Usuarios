import { Usuario } from '../usu-listar';
import { Component, OnInit } from '@angular/core';
import { UsuService } from '../usu-listar.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usu-listar.component.html',
  styleUrls: ['./usu-listar.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios?: Usuario;

  constructor(private usuariosService: UsuService) { }

  ngOnInit(): void {
  }

  getUsuario() {
    this.usuariosService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios)
  }

}
