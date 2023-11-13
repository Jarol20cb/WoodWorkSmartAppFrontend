import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-order-listar',
  templateUrl: './order-listar.component.html',
  styleUrls: ['./order-listar.component.css']
})
export class OrderListarComponent implements OnInit{
  dataSource: MatTableDataSource<Order> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'precioTotal', 'pago', 'cantidadTotal', 'fechaOrden', 'cliente','editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: OrderService, public dialog: MatDialog, private loginService:LoginService) {}

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
      if (this.role === 'ADMIN' || this.role === 'CUSTOMER') {
        this.displayedColumns = ['id', 'precioTotal', 'pago', 'cantidadTotal', 'fechaOrden', 'cliente','editar', 'eliminar'];
      }
      else {
        this.displayedColumns = ['precioTotal', 'pago', 'cantidadTotal', 'fechaOrden', 'cliente'];
      }
    }
}
