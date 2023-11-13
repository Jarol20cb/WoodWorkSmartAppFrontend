import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { LoginService } from './service/login.service';
import { MatDialog } from '@angular/material/dialog';
import { CerrarSesionComponent } from './component/dialogo/cerrar-sesion/cerrar-sesion.component';
>>>>>>> 451f5da (Se añadio la vista para furniture order)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WoodWorkSmartAp';
<<<<<<< HEAD
=======

  role:string="";
  username:string=""
  constructor(private loginService: LoginService, private dialog: MatDialog) {
  }
  verificar() {
    this.role=this.loginService.showRole();
    this.username=this.loginService.showUser();
    return this.loginService.verificar();
  }
  validarRol(){
    if(this.role=='ADMIN' || this.role=='CARPENTER'|| this.role=='CUSTOMER'){
      return true;
    }else{
      return false;
    }
  }



>>>>>>> 451f5da (Se añadio la vista para furniture order)
}
