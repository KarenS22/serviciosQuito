import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrosService } from '../../services/registros.service';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.scss'
})
export class OperacionesComponent {
  nombre: string = ""
  apellido: string = ""
  correo: string = ""
  numero: string = ""

  
  registros: { nombre: string; apellido: string; correo: string; numeroTelefono: string }[] = [];

  constructor(private registroService: RegistrosService) {
    this.registros = this.registroService.obtenerOperaciones();
  }

  realizarOperacion() {

      this.registroService.agregarOperacion({
        nombre : this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        numeroTelefono: this.numero
      });
      this.registros = this.registroService.obtenerOperaciones();
  }

  eliminarLog() {
    this.registroService.eliminarOperaciones();
    this.registros = [];
  }

  eliminarOperacion(index: number) {
    this.registroService.eliminarOperacion(index);
    this.registros = this.registroService.obtenerOperaciones(); 
  }

  seleccionarOperacion(index: number) {
    const registroSeleccionado = this.registros[index];
    this.nombre = registroSeleccionado.nombre;
    this.apellido = registroSeleccionado.apellido;
    this.correo =registroSeleccionado.correo;
    this.numero = registroSeleccionado.numeroTelefono;
  }
}
