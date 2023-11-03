import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentType } from 'src/app/model/payment';
import { PaymenttypeService } from 'src/app/service/paymenttype.service';

@Component({
  selector: 'app-listar-paymenttype',
  templateUrl: './listar-paymenttype.component.html',
  styleUrls: ['./listar-paymenttype.component.css']
})
export class ListarPaymenttypeComponent {
  dataSource: MatTableDataSource<PaymentType> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'tipo', 'editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: PaymenttypeService) {}

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
