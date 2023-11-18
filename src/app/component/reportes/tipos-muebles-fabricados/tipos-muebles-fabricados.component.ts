import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { FurnituredesignService } from 'src/app/service/furnituredesign.service';

@Component({
  selector: 'app-tipos-muebles-fabricados',
  templateUrl: './tipos-muebles-fabricados.component.html',
  styleUrls: ['./tipos-muebles-fabricados.component.css']
})
export class TiposMueblesFabricadosComponent implements OnInit {
  
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: string[] = [];
  barChartType: ChartType = 'doughnut';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(
    private fdS: FurnituredesignService
  ) {}

  ngOnInit(): void {
    this.fdS.getCFT().subscribe((data)=>{
      this.barChartLabels=data.map((item)=>item.furnitureTypeName);
      const brownColors = this.generateBrownColors(data.length);
      this.barChartData=[
        {
          data: data.map((item)=>item.countFurnitureType),
          label:'Total',
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
