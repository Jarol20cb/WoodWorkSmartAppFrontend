import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  dataSource: MatTableDataSource<Customer> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'nacimiento', 'direccion', 'dni', 'email', 'numero', 'envio', 'editar', 'eliminar'];

  constructor(private cS: CustomerService, public dialog: MatDialog, private loginService:LoginService) {}

  ngOnInit(): void {

    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.cS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

    role:string=""
    verificar() {
      this.role=this.loginService.showRole();
      return this.loginService.verificar();
    }

}
