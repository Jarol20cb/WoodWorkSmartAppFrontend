// home.component.ts
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CustomerFurniture } from 'src/app/model/customerfurniture';
import { Furniture } from 'src/app/model/furniture';
import { CustomerfurnitureService } from 'src/app/service/customerfurniture.service';
import { FurnitureService } from 'src/app/service/furniture.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  dataSource: MatTableDataSource<Furniture> = new MatTableDataSource();
  dataSourceCustomerFurniture: MatTableDataSource<CustomerFurniture> = new MatTableDataSource();
  constructor(
    public route: ActivatedRoute,
    private cS: FurnitureService,
    public dialog: MatDialog,
    private Cf: CustomerfurnitureService,

  ) {}

  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.Cf.list().subscribe((data) => {
      this.dataSourceCustomerFurniture = new MatTableDataSource(data);
    });
  }

  getBase64Image(base64: string): string {
    if (base64) {
      return 'data:image/jpeg;base64,' + base64;
    }
    return '';
  }

}
