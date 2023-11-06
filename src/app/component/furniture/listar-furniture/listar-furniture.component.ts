import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Furniture } from 'src/app/model/furniture';
import { FurnitureService } from 'src/app/service/furniture.service';

@Component({
  selector: 'app-listar-furniture',
  templateUrl: './listar-furniture.component.html',
  styleUrls: ['./listar-furniture.component.css']
})
export class ListarFurnitureComponent implements OnInit{
  dataSource: MatTableDataSource<Furniture> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'carpintero', 'diseno', 'precio', 'date', 'descripcion', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: FurnitureService) {}

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
    this.cS.delete(id).subscribe((data) => {
    this.cS.list().subscribe((data) => {
    this.cS.setList(data);
    });
    });
    }
}
