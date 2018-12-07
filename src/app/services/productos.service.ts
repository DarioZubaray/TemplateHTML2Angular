import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
    setTimeout(() => {
      this.cargando = false;
    }, 3000);
  }

  private cargarProductos() {
    const urlFirebase = 'https://angular-templatehtml.firebaseio.com/productos_idx.json';
    this.http.get(urlFirebase)
        .subscribe( (resp: ProductoInterface[]) => {
          console.log(resp);
          this.producto = resp;
        });
  }

  public getProducto(id: string) {
    return this.http.get(`https://angular-templatehtml.firebaseio.com/productos/${id}.json`);
  }
}
