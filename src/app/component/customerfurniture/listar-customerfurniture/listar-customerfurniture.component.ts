import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerFurniture } from 'src/app/model/customerfurniture';
import { CustomerfurnitureService } from 'src/app/service/customerfurniture.service';
<<<<<<< HEAD
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';
=======
<<<<<<< HEAD
=======
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645

@Component({
  selector: 'app-listar-customerfurniture',
  templateUrl: './listar-customerfurniture.component.html',
  styleUrls: ['./listar-customerfurniture.component.css']
})
<<<<<<< HEAD
export class ListarCustomerfurnitureComponent implements OnInit{
=======
<<<<<<< HEAD
export class ListarCustomerfurnitureComponent implements OnInit {
=======
export class ListarCustomerfurnitureComponent implements OnInit{
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
  dataSource: MatTableDataSource<CustomerFurniture> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'mueble', 'cliente', 'calificacion', 'comentarios', 'eliminar'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

<<<<<<< HEAD
  constructor(private cfS: CustomerfurnitureService, public dialog: MatDialog, private loginService:LoginService){}
=======
<<<<<<< HEAD
  constructor(private cfS: CustomerfurnitureService){}
=======
  constructor(private cfS: CustomerfurnitureService, public dialog: MatDialog, private loginService:LoginService){}
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    this.cfS.delete(id).subscribe((data) => {
    this.cfS.list().subscribe((data) => {
    this.cfS.setList(data);
    });
    });
    }
=======
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
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

<<<<<<< HEAD
=======
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645

}
