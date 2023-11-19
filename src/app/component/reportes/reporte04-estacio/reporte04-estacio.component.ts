import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { FurnituredesignService } from 'src/app/service/furnituredesign.service';

@Component({
  selector: 'app-reporte04-estacio',
  templateUrl: './reporte04-estacio.component.html',
  styleUrls: ['./reporte04-estacio.component.css']
})
export class Reporte04EstacioComponent implements OnInit {
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
