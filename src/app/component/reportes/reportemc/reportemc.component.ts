import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { CarpenterService } from 'src/app/service/carpenter.service';

@Component({
  selector: 'app-reportemc',
  templateUrl: './reportemc.component.html',
  styleUrls: ['./reportemc.component.css']
})
export class ReportemcComponent implements OnInit{
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private cS: CarpenterService) {}

  ngOnInit(): void {
    this.cS.getFC().subscribe((data)=>{
      this.barChartLabels=data.map((item)=>item.userFirstName);
      this.barChartData=[
        {
          data: data.map((item)=>item.totalFurnitures),
          label:'Total',
          backgroundColor:'rgba(210, 180, 140, 0.8)'
        },
      ];
    });
  }
}
