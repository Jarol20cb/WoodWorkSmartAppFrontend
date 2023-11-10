import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CarpenterService } from '../../../service/carpenter.service';
import { MatTableDataSource } from '@angular/material/table';
import { Carpenter } from 'src/app/model/carpenter';
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-listar-carpenter',
  templateUrl: './listar-carpenter.component.html',
  styleUrls: ['./listar-carpenter.component.css']
})
export class ListarCarpenterComponent implements OnInit{
  dataSource: MatTableDataSource<Carpenter> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'nacimiento', 'direccion', 'dni', 'email', 'numero', 'ruc', 'editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: CarpenterService, public dialog: MatDialog, private loginService:LoginService) {}

  ngOnInit(): void {

    this.role = this.loginService.showRole();
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
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
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

  mostrarBotones(): boolean {
    return this.role === 'ADMIN' || this.role === 'CARPENTER';
  }
}
