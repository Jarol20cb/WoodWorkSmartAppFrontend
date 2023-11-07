import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { WoodType } from 'src/app/model/wood_Type';
import { WoodTypeService } from 'src/app/service/wood-type.service';
import { ConfirmDialogComponent } from '../../dialogo/confirm-dialog-component/confirm-dialog-component.component';

@Component({
  selector: 'app-listar-wood-type',
  templateUrl: './listar-wood-type.component.html',
  styleUrls: ['./listar-wood-type.component.css']
})
export class ListarWoodTypeComponent implements OnInit{
  dataSource: MatTableDataSource<WoodType> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre','imagen', 'editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: WoodTypeService,public dialog: MatDialog) {}

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
}
