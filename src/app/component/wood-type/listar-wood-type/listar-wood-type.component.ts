import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { WoodType } from 'src/app/model/wood_Type';
import { WoodTypeService } from 'src/app/service/wood-type.service';

@Component({
  selector: 'app-listar-wood-type',
  templateUrl: './listar-wood-type.component.html',
  styleUrls: ['./listar-wood-type.component.css']
})
export class ListarWoodTypeComponent implements OnInit{
  dataSource: MatTableDataSource<WoodType> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre','imagen', 'editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: WoodTypeService) {}

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

    filter(en: any) {
      this.dataSource.filter = en.target.value.trim();
    }
}
