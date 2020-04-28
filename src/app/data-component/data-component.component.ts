import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min.js';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent implements OnInit {
  chart1: any;
  chart2: any;
  chart3: any;
  chart4: any;
  constructor() { }

  ngOnInit(): void {

  }

  ngDoCheck() {
    if (this.chart1 === undefined && document.getElementById('chartContainer')) {
      this.renderChart1();
    }
    if (this.chart2 === undefined && document.getElementById('chartContainer2')) {
      this.renderChart2();
    }
    if (this.chart3 === undefined && document.getElementById('chartContainer3')) {
      this.renderChart3();
    }
    if (this.chart4 === undefined && document.getElementById('chartContainer4')) {
      this.renderChart4();
    }
  }

  renderChart1() {
    this.chart1 = new CanvasJS.Chart('chartContainer', {
      theme: 'light2',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Industry Break Down For Black Woman That Worked For Wages'
      },
      data: [{
        type: 'pie',
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: {y} (#percent%)',
        indexLabel: '{name} - #percent%',
        dataPoints: [
          { y: 387000, name: 'Agriculture' },
          { y: 308000, name: 'HouseHold Domestic Service' },
          { y: 156000, name: 'Laundry Work' },
          { y: 28000, name: 'Manufacturing' },
          { y: 121000, name: 'Other'}
        ]
      }]
    });
  }

  renderChart2() {
    this.chart1.render();
    this.chart2 = new CanvasJS.Chart('chartContainer2', {
      theme: 'light2',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Black Women, over the age of 10, Population Break Down'
      },
      data: [{
        type: 'column',
        dataPoints: [
          { y: 1000000, label: 'Worked For Wages' },
          { y: 1700000, label: 'Didn\'t Work For Wages' },
          { y: 2700000, label: 'Total'}
        ]
      }]
    });
    this.chart2.render();
  }

  renderChart3() {
    this.chart3 = new CanvasJS.Chart('chartContainer3', {
      theme: 'light2',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Black Women Workers in Pennsylvania in 1899'
      },
      data: [{
        type: 'pie',
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: {y} (#percent%)',
        indexLabel: '{name} - #percent%',
        dataPoints: [
          { y: 14297, name: 'Domestic Service' },
          { y: 1407, name: 'Other' }
        ]
      }]
    });
    this.chart3.render();
  }

  renderChart4() {
    this.chart4 = new CanvasJS.Chart('chartContainer4', {
      theme: 'light2',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Black Woman Industry Break Down'
      },
      data: [{
        type: 'pie',
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: (#percent%)',
        indexLabel: '{name} - #percent%',
        dataPoints: [
          { y: 59.5, name: 'Domestic Service' },
          { y: 10.4, name: 'Non-Domestic Service' },
          { y: 16, name: 'Agriculture'},
          { y: 14.1, name: 'Other'}
        ]
      }]
    });
    this.chart4.render();
  }

  ngOnDestroy() {
    if (this.chart1) {
      this.chart1.destroy();
      this.chart1 = null;
    }
    if (this.chart2) {
      this.chart2.destroy();
      this.chart2 = null;
    }
    if (this.chart3) {
      this.chart3.destroy();
      this.chart3 = null;
    }
    if (this.chart4) {
      this.chart4.destroy();
      this.chart4 = null;
    }
  }

}
