import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Furniture } from 'src/app/model/furniture';
import { FurnitureService } from 'src/app/service/furniture.service';
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-listar-furniture',
  templateUrl: './listar-furniture.component.html',
  styleUrls: ['./listar-furniture.component.css']
})
export class ListarFurnitureComponent implements OnInit{
  dataSource: MatTableDataSource<Furniture> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'carpintero', 'diseno', 'precio', 'date', 'descripcion','editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: FurnitureService,  public dialog: MatDialog, private loginService:LoginService) {}

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

    getBase64Image(base64: string): string {
      if (base64) {
        return 'data:image/jpeg;base64,' + base64;
      }
      return '';
    }

    private actualizarColumnas() {
      if (this.role === 'ADMIN' || this.role === 'CARPENTER') {
        this.displayedColumns = ['id', 'carpintero', 'diseno', 'precio', 'date', 'descripcion','editar', 'eliminar'];
      }
      else {
        this.displayedColumns = ['carpintero', 'diseno', 'precio', 'date', 'descripcion'];
      }
    }
}
