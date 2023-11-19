import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-reporte04milagros',
  templateUrl: './reporte04milagros.component.html',
  styleUrls: ['./reporte04milagros.component.css']
})
export class Reporte04milagrosComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'line';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private oS: OrderService) {}

  ngOnInit(): void {
    this.oS.getCountPaymentType().subscribe((data)=>{
      this.barChartLabels=data.map((item)=>item.namePaymentType);
      this.barChartData=[
        {
          data: data.map((item)=>item.countPaymentType),
          label:'Total',
          backgroundColor:'rgba(210, 180, 140, 0.8)'
        },
      ];
    });
  }
}
