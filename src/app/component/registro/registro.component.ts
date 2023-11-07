import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private http: HttpClient) {}

  registrationData = {
    username: '',
    password: '',
    roles: '', // Propiedad para almacenar el rol seleccionado
  };

  roles = ['ADMIN', 'CARPENTER', 'CUSTOMER'];


  registerUser() {
    this.http.post('/register', this.registrationData).subscribe(
      (response) => {
        // Manejar el éxito del registro
        console.log(response);
      },
      (error) => {
        // Manejar errores de registro
        console.error(error);
      }
    );
  }
}
