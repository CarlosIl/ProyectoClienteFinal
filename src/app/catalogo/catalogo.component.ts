import { Component } from '@angular/core';
import { DatosService } from "../datos.service";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {
  productos!: any;
  producto!: any;

  constructor(private datosService: DatosService) {}

  ngOnInit() {
    this.datosService.recogerJSON()
      .subscribe(result => this.productos = result)
  }
}
