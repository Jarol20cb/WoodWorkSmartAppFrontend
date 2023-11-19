import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerfurnitureService } from 'src/app/service/customerfurniture.service';
import { CustomerFurniture } from 'src/app/model/customerfurniture';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component implements OnInit {
  dataSource: MatTableDataSource<CustomerFurniture> = new MatTableDataSource<CustomerFurniture>();
  displayedColumns: string[] = ['id', 'comentario', 'calificacion', 'cliente'];

  constructor(private customerFurnitureService: CustomerfurnitureService) {}

  ngOnInit(): void {
    this.getCustomersWithHighestQualification();
  }

  getCustomersWithHighestQualification() {
    this.customerFurnitureService.Calificacion().subscribe(
      (data) => {
        console.log('Datos recibidos del servicio:', data);
        this.dataSource.data = data;
        this.dataSource._updateChangeSubscription(); // Forzar actualización
      },
      (error) => {
        console.error('Error al buscar clientes con la calificación más alta:', error);
      }
    );
  }

}
