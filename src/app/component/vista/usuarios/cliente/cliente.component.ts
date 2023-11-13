import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { LoginService } from 'src/app/service/login.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  dataSource: Observable<Customer[]> = of([]);
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'nacimiento', 'direccion', 'dni', 'email', 'numero', 'envio', 'editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: CustomerService, public dialog: MatDialog, private loginService:LoginService) {}

  ngOnInit(): void {
    this.dataSource = this.cS.list(); // Asigna directamente el observable
    this.dataSource.subscribe((data) => {
      this.dataSource = of(data); // Esto es necesario para que *ngFor funcione correctamente
      this.paginator.pageSize = 2; // O cualquier otro valor que desees
      this.paginator.pageIndex = 0; // Asegúrate de reiniciar el índice de página al cambiar los datos
      this.paginator.length = data.length; // Esto también es necesario para el correcto funcionamiento del paginador
    });
  }



    role:string=""
    verificar() {
      this.role=this.loginService.showRole();
      return this.loginService.verificar();
    }

}
