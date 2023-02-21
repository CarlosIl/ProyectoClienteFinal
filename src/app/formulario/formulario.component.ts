import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from "@angular/forms";
import { ValidacionPropia } from "./validacion-propia";
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from "./modal/modal.component";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  subscripciones!:any;

  formularioClientes!: FormGroup;
  mensaje!:any;

  constructor(private fb: FormBuilder, private datosService: DatosService, public dialog: MatDialog) {}

  ngOnInit() {

    this.datosService.recogerSQL()
      .subscribe(result => this.subscripciones = result)

    //Validamos el formulario
    this.formularioClientes = this.fb.group({
      nombre: ['', [Validators.required]],
      passwd: ['', [Validators.required,Validators.minLength(4)]],
      edad: ['', [Validators.required,ValidacionPropia.comprobarEdad]],
      email: ['', [Validators.required]],
      sub: ['', [Validators.required]]
    })
  }

  submit(){
    if(this.formularioClientes.invalid){
      return;
    }

    // Si la validación funciona pasará el mensaje que nos de al componente modal para que los saque por pantalla.
    this.datosService.grabar(this.formularioClientes.value)
    .subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        const dialogRef = this.dialog.open(ModalComponent,{data:{mensaje: 'Datos grabados'}});
      }
    },
      (error: any) => {
        const dialogRef = this.dialog.open(ModalComponent,{data:{mensaje: 'Datos no grabados, sin conexión o alias posiblemente ya esté utilizado'}});
      })
  }
}

