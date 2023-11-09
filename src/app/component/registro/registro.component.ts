import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Registro } from 'src/app/model/registro';
import { RegistroService } from 'src/app/service/registro.service';
import { DialogComponent } from '../dialogo/dialog/dialog.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  registro: Registro = new Registro();
  id: number = 0;
  roles: string[] = ['ADMIN', 'CARPENTER', 'CUSTOMER'];
  passwordVisible: boolean = false;

  constructor(
    private cS: RegistroService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
    });

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      roles: ['', Validators.required],
    });
  }

  registrar() {
    if (this.form.valid) {
      const registro: Registro = {
        id: this.form.value.id,
        username: this.form.value.username,
        password: this.form.value.password,
        roles: [this.form.value.roles],
      };

      this.cS.insert(registro).subscribe(
        (data) => {
          this.router.navigate(['login']);
          this.openDialog('Registro Exitoso', 'El usuario se ha registrado correctamente.');
        },
        (error) => {
          console.error('Error en el registro:', error);
        }
      );
    } else {
      console.error('Formulario no válido. Por favor, completa todos los campos.');
    }
  }

  openDialog(title: string, message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { title, message },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('El cuadro de diálogo se cerró');
    });
  }

  togglePasswordVisibility() {
  this.passwordVisible = !this.passwordVisible;
}

  validatePasswordConfirmation() {
    const password = this.form.get('password')?.value;
    const confirmPassword = this.form.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      this.form.get('confirmPassword')?.setErrors(null);
    } else {
      this.form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    }
  }


}
