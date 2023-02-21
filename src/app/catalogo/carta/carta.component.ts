import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {
  @Input()nombre!:string;
  @Input()precio!:number;
  @Input()descuento!:number;
  @Input()descripcion!:string;
  precioConDesc!:number;
  link!:string;

  constructor(){}

  precioTotal(){
    return Math.round(this.precio - ((this.precio * this.descuento) / 100));
  }

  crearLink(){
    return "https://www.google.com/search?q="+this.nombre
  }
}
