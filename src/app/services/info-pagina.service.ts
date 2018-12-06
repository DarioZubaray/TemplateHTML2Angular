import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    console.log('Info Servicio inicializado');
    this.cargarInfo();
    this.cargarEquipo();
    this.cargada = true;
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.info = resp;
    });
  }

  private cargarEquipo() {
    const urlFirebase = 'https://angular-templatehtml.firebaseio.com/equipo.json';
    this.http.get(urlFirebase)
    .subscribe( (resp: any) => {
      this.equipo = resp;
    });
  }
}
