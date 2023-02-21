import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  mensaje: string = "ERROR: No se ha podido recuperar el mensaje"
  //Recogemos el nuevo mensaje y lo mostramos.
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<ModalComponent>) {
    if(data){
      this.mensaje = data.mensaje;
    }
  }
}
