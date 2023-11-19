import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentType } from 'src/app/model/payment';
import { PaymenttypeService } from 'src/app/service/paymenttype.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-listar-paymenttype',
  templateUrl: './listar-paymenttype.component.html',
  styleUrls: ['./listar-paymenttype.component.css']
})
export class ListarPaymenttypeComponent {
  dataSource: MatTableDataSource<PaymentType> = new MatTableDataSource();
  displayedColumns: string[] = ['tipo', 'editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: PaymenttypeService, public dialog: MatDialog, private loginService:LoginService ) {}

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
        this.displayedColumns= ['tipo', 'editar', 'eliminar'];
      }
      else {
        this.displayedColumns= ['tipo'];
      }
    }
}
