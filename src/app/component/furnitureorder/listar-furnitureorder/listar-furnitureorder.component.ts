import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FurnitureOrder } from 'src/app/model/furnitureorder';
import { FurnitureorderService } from 'src/app/service/furnitureorder.service';

@Component({
  selector: 'app-listar-furnitureorder',
  templateUrl: './listar-furnitureorder.component.html',
  styleUrls: ['./listar-furnitureorder.component.css']
})
export class ListarFurnitureorderComponent implements OnInit{
  dataSource: MatTableDataSource<FurnitureOrder> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'mueble', 'orden', 'calificacion', 'eliminar'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cfS: FurnitureorderService){}

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
    this.cfS.delete(id).subscribe((data) => {
    this.cfS.list().subscribe((data) => {
    this.cfS.setList(data);
    });
    });
    }
}
