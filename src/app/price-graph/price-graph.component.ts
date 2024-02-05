import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, ChartOptions, registerables } from 'chart.js';

@Component({
  selector: 'app-price-graph',
  templateUrl: './price-graph.component.html',
  styleUrls: ['./price-graph.component.css']
})
export class PriceGraphComponent implements OnInit, AfterViewInit {
  priceData: any = {
    day: [120, 122, 121, 123, 125, 128, 130],
    week: [110, 115, 120, 125, 130, 135, 140],
    month: [100, 105, 110, 115, 120, 125, 130],
    year: [90, 95, 100, 105, 110, 115, 120],
  };

  @ViewChild('priceChartCanvas', { static: false }) priceChartCanvas!: ElementRef;

  private chart: Chart | null = null;

  ngOnInit() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.createPriceGraph('day');
  }

  createPriceGraph(timeframe: string): void {
    const ctx = this.priceChartCanvas?.nativeElement;
  
    if (!ctx) {
      console.error('Canvas element is not defined.');
      return;
    }
  
    const chartData = this.priceData[timeframe];
  
    if (!this.chart) {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5', 'Label6', 'Label7'],
          datasets: [
            {
              label: 'Price',
              data: chartData,
              borderColor: '#ff5722',
              backgroundColor: 'rgba(0, 0, 255, 0.1)',
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: true,
              },
            },
            y: {
              grid: {
                display: true,
              },
            },
          },
        } as ChartOptions,
      });
    } else {
      this.chart.data.labels = ['Label1', 'Label2', 'Label3', 'Label4', 'Label5', 'Label6', 'Label7'];
      this.chart.data.datasets[0].data = chartData;
      this.chart.update();
    }
  }
}
