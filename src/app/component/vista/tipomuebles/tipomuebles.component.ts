import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { FurnitureType } from 'src/app/model/furnituretype';
import { FurnituretypeService } from 'src/app/service/furnituretype.service';

@Component({
  selector: 'app-tipomuebles',
  templateUrl: './tipomuebles.component.html',
  styleUrls: ['./tipomuebles.component.css']
})
export class TipomueblesComponent implements OnInit {

  dataSource: MatTableDataSource<FurnitureType> = new MatTableDataSource();
  item: FurnitureType[] = [];

  constructor(
    public route: ActivatedRoute,
    private ftS: FurnituretypeService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.ftS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.item = data;
    });
  }

  getBase64Image(base64: string): string {
    if (base64) {
      return 'data:image/jpeg;base64,' + base64;
    }
    return '';
  }
}
