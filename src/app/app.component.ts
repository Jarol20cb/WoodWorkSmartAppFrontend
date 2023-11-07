import { Component } from '@angular/core';
import { LoginService } from './service/login.service';
import { MatDialog } from '@angular/material/dialog';
import { CerrarSesionComponent } from './component/dialogo/cerrar-sesion/cerrar-sesion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WoodWorkSmartAp';

  role:string="";
  constructor(private loginService: LoginService, private dialog: MatDialog) {
  }

  cerrar() {
    const dialogRef = this.dialog.open(CerrarSesionComponent, {
      width: '300px',
      data: { mensaje: '¿Estás seguro de cerrar la sesión?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        sessionStorage.clear();
        window.location.href = '/login';
      }
    });
  }

  verificar() {
    this.role=this.loginService.showRole();
    return this.loginService.verificar();
  }
  validarRol(){
    if(this.role=='ADMIN' || this.role=='CARPENTER'|| this.role=='CUSTOMER'){
      return true;
    }else{
      return false;
    }
  }



}
