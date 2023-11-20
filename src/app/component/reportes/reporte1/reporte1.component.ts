// reporte1.component.ts

import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component implements OnInit {
  // Configuración común para todos los gráficos
  commonChartOptions: ChartOptions = {
    responsive: true,
  };
  commonChartLabels: string[] = [];
  commonChartLegend = true;

  // Gráfico de Barras
  barChartType: ChartType = 'bar';
  barChartData: ChartDataset[] = [];

  // Gráfico de Línea
  lineChartType: ChartType = 'line';
  lineChartData: ChartDataset[] = [];

  // Gráfico de Dona
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartData: ChartDataset[] = [];

  constructor(private cS: OrderService) {}

  ngOnInit(): void {
    // Lógica común para todos los gráficos
    this.cS.getCountUsers().subscribe(
      data => {
        console.log('Data from server:', data);
        this.commonChartLabels = data.map(item => item[1]);
        const brownColors = this.generateBrownColors(data.length);

        // Gráfico de Barras
        this.barChartData = [
          { data: data.map(item => item[2]), label: 'Total Gastado', backgroundColor: brownColors, }
        ];

        // Gráfico de Línea
        this.lineChartData = [
          { data: data.map(item => item[2]), label: 'Total Gastado', backgroundColor: brownColors, }
        ];

        // Gráfico de Dona
        this.doughnutChartData = [
          { data: data.map(item => item[2]), label: 'Total Gastado', backgroundColor: brownColors, }
        ];
      },
      error => {
        console.error('Error fetching total sales data:', error);
      }
    );
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
