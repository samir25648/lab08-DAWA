import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from 'src/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productoarray: Producto[] = [

    { codigo: 1, nombre: 'Inca-Kola', descripcion: 'Las gaseosas Inca Kola tienen un sabor dulce y su color es amarillo, usualmente en Perú esta bebida se podrá encontrar en envases de vidrio y en latas desechables.', precio: 2.00 },
    { codigo: 2, nombre: 'Sprite', descripcion: 'Sprite es una bebida naturalmente refrescante por su ausencia de aromas artificiales, colorantes y conservantes.', precio: 2.50 }

  ];

  getProducts():Observable<Producto[]> {

    return of(this.productoarray);

  }

  deleteProduct (id: number | undefined): Observable<Object> {

    for (var i = 0; i < this.productoarray.length; i++) {

      if (id == this.productoarray[i].codigo){

        delete this.productoarray[i]

      }

    }
    
    return of(this.productoarray)

  }

  constructor() { }

}
