import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public _ps: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      console.log(params['termino']);
      this._ps.buscarProducto(params['termino']);
    });
  }

}
