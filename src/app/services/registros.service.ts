import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  private localStorageKey = 'registros';

  constructor() { }

  agregarOperacion(registro: { nombre: string; apellido: string; correo: string; numeroTelefono: string}) {
    const registros = this.obtenerOperaciones();
    registros.push(registro);
    localStorage.setItem(this.localStorageKey, JSON.stringify(registros));
  }

  obtenerOperaciones(): { nombre: string; apellido: string; correo: string; numeroTelefono: string}[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }

  eliminarOperacion(index: number) {
    const registros = this.obtenerOperaciones();
    if (index >= 0 && index < registros.length) {
      registros.splice(index, 1);
      localStorage.setItem(this.localStorageKey, JSON.stringify(registros));
    }
  }  

  eliminarOperaciones() {
    localStorage.removeItem(this.localStorageKey);
  }
}
