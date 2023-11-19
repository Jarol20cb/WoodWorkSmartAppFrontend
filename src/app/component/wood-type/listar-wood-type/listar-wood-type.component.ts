import { Component, OnInit, ViewChild } from '@angular/core';
<<<<<<< HEAD
import { MatDialog } from '@angular/material/dialog';
=======
<<<<<<< HEAD
=======
import { MatDialog } from '@angular/material/dialog';
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { WoodType } from 'src/app/model/wood_Type';
import { WoodTypeService } from 'src/app/service/wood-type.service';
<<<<<<< HEAD
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { LoginService } from 'src/app/service/login.service';
=======
<<<<<<< HEAD
=======
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { LoginService } from 'src/app/service/login.service';
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645

@Component({
  selector: 'app-listar-wood-type',
  templateUrl: './listar-wood-type.component.html',
  styleUrls: ['./listar-wood-type.component.css']
})
export class ListarWoodTypeComponent implements OnInit{
  dataSource: MatTableDataSource<WoodType> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre','imagen', 'editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

<<<<<<< HEAD
  constructor(private cS: WoodTypeService,public dialog: MatDialog, private loginService:LoginService) {}
=======
<<<<<<< HEAD
  constructor(private cS: WoodTypeService) {}
=======
  constructor(private cS: WoodTypeService,public dialog: MatDialog, private loginService:LoginService) {}
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645

  ngOnInit(): void {

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    this.cS.delete(id).subscribe((data) => {
    this.cS.list().subscribe((data) => {
    this.cS.setList(data);
    });
    });
=======
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
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

    getBase64Image(base64: string): string {
      if (base64) {
        return 'data:image/jpeg;base64,' + base64;
      }
      return '';
<<<<<<< HEAD
=======
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
    }
}
