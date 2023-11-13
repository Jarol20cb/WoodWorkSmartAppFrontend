import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-listar-customer',
  templateUrl: './listar-customer.component.html',
  styleUrls: ['./listar-customer.component.css']
})
export class ListarCustomerComponent implements OnInit{
  dataSource: MatTableDataSource<Customer> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'nacimiento', 'direccion', 'dni', 'email', 'numero', 'envio', 'editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: CustomerService, public dialog: MatDialog, private loginService:LoginService) {}

  ngOnInit(): void {
    this.role = this.loginService.showRole();
    this.actualizarColumnas();
    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

    });
    this.cS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

    });
  }

  eliminar(id: number) {
    // Abre un cuadro de diálogo de confirmación antes de eliminar
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        // Si el usuario confirmó, realiza la eliminación
        this.cS.delete(id).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
    });
  }

    filter(en: any) {
      this.dataSource.filter = en.target.value.trim();
    }

    role:string=""
    verificar() {
      this.role=this.loginService.showRole();
      return this.loginService.verificar();
    }

    private actualizarColumnas() {
      if (this.role === 'ADMIN') {
        this.displayedColumns = ['id', 'nombre', 'apellido', 'nacimiento', 'direccion', 'dni', 'email', 'numero', 'envio', 'editar', 'eliminar'];
      } else if (this.role === 'CUSTOMER') {
        this.displayedColumns = ['id', 'nombre', 'apellido', 'nacimiento', 'direccion', 'dni', 'email', 'numero', 'envio', 'editar'];
      } else {
        this.displayedColumns = ['nombre', 'apellido', 'nacimiento', 'direccion', 'dni', 'email', 'numero', 'envio'];
      }
    }

}
