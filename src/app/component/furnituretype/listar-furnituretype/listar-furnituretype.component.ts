import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FurnitureType } from 'src/app/model/furnituretype';
import { FurnituretypeService } from 'src/app/service/furnituretype.service';
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-listar-furnituretype',
  templateUrl: './listar-furnituretype.component.html',
  styleUrls: ['./listar-furnituretype.component.css']
})
export class ListarFurnituretypeComponent implements OnInit{

  dataSource: MatTableDataSource<FurnitureType> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'imagen', 'editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: FurnituretypeService, public dialog: MatDialog, private loginService:LoginService) {}

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

    // Función para obtener la URL de la imagen
    getBase64Image(base64: string): string {
  if (base64) {
    return 'data:image/jpeg;base64,' + base64; // Puedes ajustar el tipo de imagen según lo que obtienes de tu servidor
  }
  return ''; // Devuelve una cadena vacía si no hay imagen
}

private actualizarColumnas() {
  if (this.role === 'ADMIN') {
    this.displayedColumns = ['id', 'nombre', 'imagen', 'editar', 'eliminar'];
  }
  else {
    this.displayedColumns = ['nombre', 'imagen'];
  }
}

}
