import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FurnitureOrder } from 'src/app/model/furnitureorder';
import { FurnitureorderService } from 'src/app/service/furnitureorder.service';
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-listar-furnitureorder',
  templateUrl: './listar-furnitureorder.component.html',
  styleUrls: ['./listar-furnitureorder.component.css']
})
export class ListarFurnitureorderComponent implements OnInit{
  dataSource: MatTableDataSource<FurnitureOrder> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'mueble', 'orden', 'calificacion','editar', 'eliminar'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cfS: FurnitureorderService, public dialog: MatDialog, private loginService:LoginService){}

  ngOnInit(): void {
    this.role = this.loginService.showRole();
    this.actualizarColumnas();
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

  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }


  getBase64Image(base64: string): string {
    if (base64) {
      return 'data:image/jpeg;base64,' + base64;
    }
    return '';
  }

  private actualizarColumnas() {
    if (this.role === 'ADMIN') {
      this.displayedColumns = ['id', 'mueble', 'orden', 'calificacion','editar', 'eliminar'];
    }
    else {
      this.displayedColumns = ['mueble', 'orden', 'calificacion'];
    }
  }

}
