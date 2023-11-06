import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerFurniture } from 'src/app/model/customerfurniture';
import { CustomerfurnitureService } from 'src/app/service/customerfurniture.service';

@Component({
  selector: 'app-listar-customerfurniture',
  templateUrl: './listar-customerfurniture.component.html',
  styleUrls: ['./listar-customerfurniture.component.css']
})
export class ListarCustomerfurnitureComponent implements OnInit {
  dataSource: MatTableDataSource<CustomerFurniture> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'mueble', 'cliente', 'calificacion', 'comentarios', 'eliminar'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cfS: CustomerfurnitureService){}

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
