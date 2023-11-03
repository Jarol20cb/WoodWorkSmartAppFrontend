import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CarpenterService } from '../../../service/carpenter.service';
import { MatTableDataSource } from '@angular/material/table';
import { Carpenter } from 'src/app/model/carpenter';

@Component({
  selector: 'app-listar-carpenter',
  templateUrl: './listar-carpenter.component.html',
  styleUrls: ['./listar-carpenter.component.css']
})
export class ListarCarpenterComponent implements OnInit{
  dataSource: MatTableDataSource<Carpenter> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'nacimiento', 'direccion', 'dni', 'email', 'numero', 'ruc', 'editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: CarpenterService) {}

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
