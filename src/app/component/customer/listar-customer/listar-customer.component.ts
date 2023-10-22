import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/model/Customer';

import { CustomerService } from 'src/app/service/customer.service';
import {MatPaginatorModule} from '@angular/material/paginator';



@Component({
  selector: 'app-listar-customer',
  templateUrl: './listar-customer.component.html',
  styleUrls: ['./listar-customer.component.css']
})
export class ListarCustomerComponent implements OnInit{
  dataSource:MatTableDataSource<Customer>=new MatTableDataSource();
  displayColumns: string[] = ['id', 'nombre', 'apellido', 'nacimiento', 'direccion', 'dni', 'email', 'numero', 'envio'];


  constructor(private cS:CustomerService){
    this.cS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
  ngOnInit(): void {
    this.cS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
