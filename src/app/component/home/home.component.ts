<<<<<<< HEAD
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
=======
// home.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Furniture } from 'src/app/model/furniture';
import { FurnitureService } from 'src/app/service/furniture.service';
>>>>>>> 451f5da (Se añadio la vista para furniture order)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
<<<<<<< HEAD
export class HomeComponent {
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {}
=======
export class HomeComponent implements OnInit {
  dataSource: MatTableDataSource<Furniture> = new MatTableDataSource();

  constructor(
    public route: ActivatedRoute,
    private cS: FurnitureService,
    public dialog: MatDialog,

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

>>>>>>> 451f5da (Se añadio la vista para furniture order)
}
