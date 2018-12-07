import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto: ProductoInterface[] = [];
  productosFiltrados: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
    setTimeout(() => {
      this.cargando = false;
    }, 3000);
  }

  private cargarProductos() {
    const urlFirebase = 'https://angular-templatehtml.firebaseio.com/productos_idx.json';

    return new Promise( (resolve, reject) => {
      this.http.get(urlFirebase)
          .subscribe( (resp: ProductoInterface[]) => {
            console.log(resp);
            this.producto = resp;
            resolve();
          });
    });
  }

  public getProducto(id: string) {
    return this.http.get(`https://angular-templatehtml.firebaseio.com/productos/${id}.json`);
  }

  public buscarProducto(termino: string) {
    if (this.producto.length === 0) {
      this.cargarProductos().then( () => {
        this.filtrarProductos(termino);
      });

    } else {
      this.filtrarProductos(termino);
    }
    console.log(this.productosFiltrados);
  }

  private filtrarProductos(termino: string) {
    this.productosFiltrados = [];
    termino = termino.toLowerCase();
    this.producto.forEach( p => {
      const titulo = p.titulo.toLowerCase();
      const categoria = p.categoria.toLowerCase();

      if (categoria.indexOf(termino) >= 0
          || titulo.indexOf(termino) >= 0) {
        this.productosFiltrados.push(p);
      }
    });
  }
}
