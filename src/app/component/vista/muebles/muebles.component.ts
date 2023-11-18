import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Furniture } from 'src/app/model/furniture';
import { FurnitureService } from 'src/app/service/furniture.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-muebles',
  templateUrl: './muebles.component.html',
  styleUrls: ['./muebles.component.css']
})
export class MueblesComponent implements OnInit{
  dataSource: MatTableDataSource<Furniture> = new MatTableDataSource();
  constructor(
    public route: ActivatedRoute,
    private cS: FurnitureService,
    public dialog: MatDialog,
    private loginService:LoginService,

  ) {}

  ngOnInit(): void {
    this.role = this.loginService.showRole();
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
  role:string=""
    verificar() {
      this.role=this.loginService.showRole();
      return this.loginService.verificar();
    }
}
