import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { FurnitureOrder } from 'src/app/model/furnitureorder';
import { FurnitureorderService } from 'src/app/service/furnitureorder.service';

@Component({
  selector: 'app-mueblesorder',
  templateUrl: './mueblesorder.component.html',
  styleUrls: ['./mueblesorder.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class MueblesorderComponent implements OnInit{
  dataSource:MatTableDataSource<FurnitureOrder>=new MatTableDataSource();
  constructor(
    public route: ActivatedRoute,
    private cS: FurnitureorderService,
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
