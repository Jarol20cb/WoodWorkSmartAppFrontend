import { CustomerService } from 'src/app/service/customer.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';



@Component({
  selector: 'app-reportedni',
  templateUrl: './reportedni.component.html',
  styleUrls: ['./reportedni.component.css']
})
export class ReportedniComponent implements OnInit{
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
      this.barChartLabels=data.map((item)=>item.customer.dni);
      this.barChartData=[
        {
          data: data.map((item)=>item.totalQuantity),
          label:'Total',
          backgroundColor:'rgba(210, 180, 140, 0.8)'
        },
      ];
    });
  }
}
