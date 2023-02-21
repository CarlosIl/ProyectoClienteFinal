import { Component, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() abrir = false;
  @Output() enviar = new EventEmitter();

  constructor(){}

  funcion(){
    if(this.abrir==false){
      this.abrir=true
    }else{
      this.abrir=false
    }
    this.enviar.emit(this.abrir);
  }
}
