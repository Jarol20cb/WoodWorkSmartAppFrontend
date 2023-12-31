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
      const brownColors = this.generateBrownColors(data.length);
      this.barChartData = [
        {
          data: data.map((item) => item.count),
          label:'Cantidad de madera',
          backgroundColor: brownColors,
        },
      ];
    });
  }
  private generateBrownColors(count: number): string[] {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const brownColor = `rgba(${Math.floor(Math.random() * 51) + 153}, ${Math.floor(
        Math.random() * 51) + 102}, ${Math.floor(Math.random() * 51) + 51}, 0.8)`;
      colors.push(brownColor);
    }
    return colors;
  }
}
