import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/models/producto';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {

  producto: Producto = new Producto();
  products: Producto[] = [];
  productoForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductosService,
    private router: Router) {
    this.productoForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],

    })
  }

  agregarProducto() {
    const PRODUCTO: Producto = {
      codigo: this.productoForm.get('codigo')?.value,
      nombre: this.productoForm.get('nombre')?.value,
      descripcion: this.productoForm.get('descripcion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    this.producto.codigo = PRODUCTO.codigo
    this.producto.descripcion = PRODUCTO.descripcion
    this.producto.nombre = PRODUCTO.nombre
    this.producto.precio = PRODUCTO.precio

    this.productService.getProducts().subscribe(data => {

      this.products = data;

    })

    this.products.push(this.producto)

    console.log(PRODUCTO)
    this.router.navigate(['/'])
  }

  ngOnInit(): void {

  }

}
