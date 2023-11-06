import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FurnitureDesign } from 'src/app/model/furnituredesign';
import { FurnituredesignService } from 'src/app/service/furnituredesign.service';

@Component({
  selector: 'app-listar-furnituredesign',
  templateUrl: './listar-furnituredesign.component.html',
  styleUrls: ['./listar-furnituredesign.component.css']
})
export class ListarFurnituredesignComponent implements OnInit{
  dataSource: MatTableDataSource<FurnitureDesign> = new MatTableDataSource();
  displayedColumns: string[] = ['id','nombre', 'tipomadera', 'tipomueble', 'color', 'largo', 'alto', 'ancho', 'estimado','eliminar'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: FurnituredesignService) {}

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
