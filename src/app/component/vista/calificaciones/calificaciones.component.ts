import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerFurniture } from 'src/app/model/customerfurniture';
import { CustomerfurnitureService } from 'src/app/service/customerfurniture.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class CalificacionesComponent implements OnInit{

  dataSource: MatTableDataSource<CustomerFurniture> = new MatTableDataSource();

  constructor(
    public route: ActivatedRoute,
    private cS: CustomerfurnitureService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  getBase64Image(base64: string): string {
    if (base64) {
      return 'data:image/jpeg;base64,' + base64;
    }
    return '';
  }

}
