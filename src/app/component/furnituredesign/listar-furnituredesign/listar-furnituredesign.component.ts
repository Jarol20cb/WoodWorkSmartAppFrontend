import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FurnitureDesign } from 'src/app/model/furnituredesign';
import { FurnituredesignService } from 'src/app/service/furnituredesign.service';
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-listar-furnituredesign',
  templateUrl: './listar-furnituredesign.component.html',
  styleUrls: ['./listar-furnituredesign.component.css']
})
export class ListarFurnituredesignComponent implements OnInit{
  dataSource: MatTableDataSource<FurnitureDesign> = new MatTableDataSource();
  displayedColumns: string[] = ['id','nombre', 'tipomadera', 'tipomueble', 'color', 'largo', 'alto', 'ancho', 'estimado','eliminar'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: FurnituredesignService,  public dialog: MatDialog, private loginService:LoginService) {}

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
    }
}
