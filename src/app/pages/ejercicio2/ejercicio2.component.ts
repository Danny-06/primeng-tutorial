import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables)


@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.scss']
})
export class Ejercicio2Component implements OnInit {

  constructor() {}

  ngOnInit(): void {

    const weekDays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

    const bar = document.querySelector('#bar') as HTMLCanvasElement
    const barCtx = bar.getContext('2d') as CanvasRenderingContext2D

    const doughnut = document.querySelector('#doughnut') as HTMLCanvasElement
    const doughnutCtx = doughnut.getContext('2d') as CanvasRenderingContext2D

    const line = document.querySelector('#line') as HTMLCanvasElement
    const lineCtx = line.getContext('2d') as CanvasRenderingContext2D

    // Chart.js: https://www.chartjs.org/

    const chartBar = new Chart(barCtx, {
      type: 'scatter',
      data: {
        datasets: [{
          type: 'line',
          label: 'Importaciones',
          data: [30, 10, 90, 50, 56, 90, 34],
          fill: false,
          borderColor: "orange",
          borderWidth: 2,
      },
      {
          type: 'bar',
          label: 'Exportaciones',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: "#26A69A",
      }],
      labels: weekDays,
    },
      options: {
        responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    })

    const charDoughnut = new Chart(doughnutCtx, {
      type: 'doughnut',
      data: {
        labels: ['Multiplataforma', 'Desarrollo web', 'Cibersegurdad'],
        datasets: [{
            label: '',
            data: [300, 50, 100],
            backgroundColor: ['#54a5f5', '#66bb6a', '#efa720']
          }]
      },
      options: {
        responsive: false,
          parsing: {
              key: 'nested.value'
          }
      }
    })

    const lineChart = new Chart(lineCtx, {
      type: 'radar',
      data: {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      },
      options: {
        responsive: false,
        elements: {
          line: {
            borderWidth: 3
          }
        }
      },
    });

  }

}
