import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FurnitureType } from 'src/app/model/furnituretype';
import { FurnituretypeService } from 'src/app/service/furnituretype.service';

@Component({
  selector: 'app-listar-furnituretype',
  templateUrl: './listar-furnituretype.component.html',
  styleUrls: ['./listar-furnituretype.component.css']
})
export class ListarFurnituretypeComponent implements OnInit{

  dataSource: MatTableDataSource<FurnitureType> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'imagen', 'editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: FurnituretypeService) {}

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
