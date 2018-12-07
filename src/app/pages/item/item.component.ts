import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor(private router: ActivatedRoute, public _ps: ProductosService) {  }

  ngOnInit() {
    this.router.params.subscribe( parametros => {
      this.id = parametros['id'];
      this._ps.getProducto(this.id)
          .subscribe( (producto: ProductoDescripcion) => {
            console.log(producto);
            this.producto = producto;
          });
    });
  }

}
