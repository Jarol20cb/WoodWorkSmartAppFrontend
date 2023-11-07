import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerFurniture } from 'src/app/model/customerfurniture';
import { CustomerfurnitureService } from 'src/app/service/customerfurniture.service';
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-listar-customerfurniture',
  templateUrl: './listar-customerfurniture.component.html',
  styleUrls: ['./listar-customerfurniture.component.css']
})
export class ListarCustomerfurnitureComponent implements OnInit{
  dataSource: MatTableDataSource<CustomerFurniture> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'mueble', 'cliente', 'calificacion', 'comentarios', 'eliminar'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cfS: CustomerfurnitureService, public dialog: MatDialog, private loginService:LoginService){}

  ngOnInit(): void {
    this.cfS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

    });
    this.cfS.getList().subscribe((data) => {
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
        this.cfS.delete(id).subscribe((data) => {
          this.cfS.list().subscribe((data) => {
            this.cfS.setList(data);
          });
        });
      }
    });
  }

  role:string=""
  verificar() {
    this.role=this.loginService.showRole();
    return this.loginService.verificar();
  }

}
