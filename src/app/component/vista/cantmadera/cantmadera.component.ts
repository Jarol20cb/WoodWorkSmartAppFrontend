import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FurnituredesignService } from 'src/app/service/furnituredesign.service';
import { ChartOptions, ChartDataset } from 'chart.js';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-cantmadera',
  templateUrl: './cantmadera.component.html',
  styleUrls: ['./cantmadera.component.css']
})
export class CantmaderaComponent implements OnInit{
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'pie';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(
    public route: ActivatedRoute,
    private fdS:FurnituredesignService
  ){}
  ngOnInit(): void {
    this.fdS.getcountwood().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.woodname);
      this.barChartData = [
        {
          data: data.map((item) => item.count),
          label:'Cantidad de madera',
          backgroundColor:'rgba(0,0,255,0.5)'
        },
      ];
    });
  }
}
