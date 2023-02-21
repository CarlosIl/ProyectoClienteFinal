import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url1:string='https://dummyjson.com/products'
  //Si no tienes conexión o la web está caida utilizar esta línea para usar el fichero json
  //url1:string="./assets/json/products.json"
  url2:string="http://localhost:80/supermercado/"
  //Para utilizar la base de datos y los php usar el zip
  constructor(private http: HttpClient) { }
  recogerJSON() {
    return this.http.get(this.url1);
  }
  recogerSQL() {
    return this.http.get(this.url2+"recuperarSubs.php");
  }
  grabar(datosClientes: any) {
    return this.http.post(`${this.url2}registrarClientes.php`,JSON.stringify(datosClientes))
  }
}
