import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { OrderService } from 'src/app/service/order.service';


@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component implements OnInit {
  totalSalesData: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getCountUsers().subscribe(
      data => {
        console.log('Data from server:', data);
        this.totalSalesData = data;
      },
      error => {
        console.error('Error fetching total sales data:', error);
      }
    );
  }

calculateBarWidth(totalGastado: number): number {
  return totalGastado / 100;
}


}
