import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-reporte05-mauricio',
  templateUrl: './reporte05-mauricio.component.html',
  styleUrls: ['./reporte05-mauricio.component.css']
})
export class Reporte05MauricioComponent implements OnInit{
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private cS: CustomerService) {}

  ngOnInit(): void {
    this.cS.getDNI().subscribe((data)=>{
      this.barChartLabels=data.map((item)=>item.dni);
      this.barChartData=[
        {
          data: data.map((item)=>item.quantityOrder),
          label:'Total',
          backgroundColor:'rgba(210, 180, 140, 0.8)'
        },
      ];
    });
  }
}
