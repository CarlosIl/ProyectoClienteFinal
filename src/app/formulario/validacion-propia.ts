import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export class ValidacionPropia {
    static comprobarEdad(control: AbstractControl): ValidationErrors| null {
        let edad = parseInt(control.value);
        if (edad > 18 && edad < 65)
            return null
        else
            return { comprobarEdad: true }
    }
}
