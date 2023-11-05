import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FurnitureDesignService } from 'src/app/service/furnituredesign.service';
import { FurnitureDesign } from 'src/app/model/furnituredesign';

@Component({
  selector: 'app-listar-furnituredesign',
  templateUrl: './listar-furnituredesign.component.html',
  styleUrls: ['./listar-furnituredesign.component.css']
})
export class ListarFurnituredesignComponent implements OnInit{
  dataSource: MatTableDataSource<FurnitureDesign> = new MatTableDataSource();
  displayedColumns: string[] = ['id','nombre', 'tipo-madera', 'tipo-mueble', 'color', 'largo', 'alto', 'ancho', 'estimado', 'editar', 'eliminar'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: FurnitureDesignService) {}

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
