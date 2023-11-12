import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { WoodType } from 'src/app/model/wood_Type';
import { WoodTypeService } from 'src/app/service/wood-type.service';

@Component({
  selector: 'app-maderas',
  templateUrl: './maderas.component.html',
  styleUrls: ['./maderas.component.css']
})
export class MaderasComponent implements OnInit {

  dataSource: MatTableDataSource<WoodType> = new MatTableDataSource();
  carouselItems: WoodType[] = [];

  constructor(
    public route: ActivatedRoute,
    private cS: WoodTypeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.carouselItems = data;
    });
  }

  getBase64Image(base64: string): string {
    if (base64) {
      return 'data:image/jpeg;base64,' + base64;
    }
    return '';
  }
}
