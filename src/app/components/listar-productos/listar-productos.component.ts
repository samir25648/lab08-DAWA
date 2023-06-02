import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/models/producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  products: Producto[] = [];

  constructor (private productService: ProductosService) { }

  deleteProdct (id: number | undefined) {

    this.productService.deleteProduct(id).subscribe(data => {

      console.log(data);
      this.productService.getProducts();

    })

  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(data => {

      this.products = data;

    })
    
  }

}
