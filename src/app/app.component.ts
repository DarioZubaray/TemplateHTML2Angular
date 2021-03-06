import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'portafolio';
  constructor(public infoPagina: InfoPaginaService, public productosService: ProductosService) {

  }
}
