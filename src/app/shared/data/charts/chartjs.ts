import { ChartConfiguration, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
let root:any = document.querySelector(':root')
const primaryColor = getComputedStyle(root)?.getPropertyValue("--primary-bg-color")
const singleColor2 =  '#7fbdff'
const singleColor3 =  getComputedStyle(root)?.getPropertyValue("--bs-pink")

//Line Charts
export let lineChartOptions: ChartConfiguration['options'] = {
  elements: {
    line: {
      tension: 0.5,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    },
    y: {
      ticks: {
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    },
  },
};

export let lineChartType: ChartType = 'line';
export let lineChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
      borderColor: '#f7557a ',
      borderWidth: 1,
      fill: false
    }, {
      data: [10, 20, 25, 55, 50, 45, 35, 30, 45, 35, 55, 40],
      borderColor: '#007bff',
      borderWidth: 1,
      fill: false
    }
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

//Solid Color
export let solidColor: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      ticks: {
        // beginAtZero: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
    x: {
      ticks: {
        display: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: false,
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
  },
};
export let solidColorType: ChartType = 'bar';
export let solidColorLegend = true;
export let solidColorPlugins = [DataLabelsPlugin];
export let solidColorData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [12, 39, 20, 10, 25, 18],
      label: '# of Votes',
      borderWidth: 2,
      backgroundColor: primaryColor,
      borderColor: primaryColor,
      hoverBackgroundColor: primaryColor,
      hoverBorderColor: primaryColor,
    }
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};

//Solid Color 2
export let solidColor2: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      ticks: {
        // beginAtZero: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
    x: {
      ticks: {
        display: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: false,
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
  },
};
export let solidColorType2: ChartType = 'bar';
export let solidColorLegend2 = true;
export let solidColorPlugins2 = [DataLabelsPlugin];
export let solidColorData2: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [12, 39, 20, 10, 25, 18],
      label: '# of Votes',
      borderWidth: 2,
      backgroundColor: singleColor2,
      borderColor: singleColor2,
      hoverBackgroundColor: singleColor2,
      hoverBorderColor: singleColor2,
    }
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};

//Solid Color 3
export let solidColor3: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      ticks: {
        // beginAtZero: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
    x: {
      ticks: {
        display: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: false,
        color: 'rgba(171, 167, 167,0.2)',
      },
    },
  },
};
export let solidColorType3: ChartType = 'bar';
export let solidColorLegend3 = true;
export let solidColorPlugins3 = [DataLabelsPlugin];
export let solidColorData3: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [12, 39, 20, 10, 25, 18],
      label: '# of Votes',
      borderWidth: 2,
      backgroundColor: singleColor3,
      borderColor: singleColor3,
      hoverBackgroundColor: singleColor3,
      hoverBorderColor: singleColor3,
    }
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};

//BarChart1
export let barChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      ticks: {
        // beginAtZero: true,
        stepSize: 150,
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    x: {
      ticks: {
        display: true,
        color: '#77778e',
      },
      grid: {
        display: false,
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
};
export let barChartType: ChartType = 'bar';
export let barChartLegend = true;
export let barChartPlugins = [DataLabelsPlugin];
export let barChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [200, 450, 290, 367, 256, 543, 345],
      label: 'Sales',
      borderWidth: 2,
      backgroundColor: primaryColor,
      borderColor: primaryColor,
      pointBackgroundColor: '#ffffff',
      hoverBackgroundColor: primaryColor,
      hoverBorderColor: primaryColor,
    },
    {
      data: [144, 380, 200, 360, 180, 500, 310],
      label: 'Profit',
      borderWidth: 2,
      backgroundColor: '#53caed',
      borderColor: '#53caed',
      pointBackgroundColor: '#ffffff',
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
};

//BarChart2
export let barChart2Options: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      stacked: true,
      ticks: {
        // beginAtZero: true,
        // stepSize: 150,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    },
    x: {
      stacked: true,
      ticks: {
        display: true,
        color: "rgba(171, 167, 167,0.9)",
      },
      grid: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    },
  },
};
export let barChart2Type: ChartType = 'bar';
export let barChart2Legend = true;
export let barChart2Plugins = [];
export let barChart2Data: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [10, 24, 20, 25, 35, 50],
      backgroundColor: '#007bff',
      borderWidth: 1,
      fill: true
    }, {
      data: [10, 24, 20, 25, 35, 50],
      backgroundColor: '#58a2f1',
      borderWidth: 1,
      fill: true
    }, {
      data: [20, 30, 28, 33, 45, 65],
      backgroundColor: '#c9e1fb',
      borderWidth: 1,
      fill: true
    }
  ],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
};

//Area Chart
export let AreaChartOptions: ChartConfiguration['options'] = {
  elements: {
    line: {
      tension: 0.4,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  hover: {
    mode: 'nearest',
    intersect: true,
  },

  scales: {
    x: {
      stacked: true,
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119,119,142, 0.2)',
      },
    },
    y: {
      ticks: {
        color: '#77778e'
      },
      grid: {
        color: 'rgba(119,119,142, 0.2)',
      },
    },
  },
};

export let AreaChartType: ChartType = 'line';
export let AreaChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Data1',
      data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
      borderColor: '#f7557a',
      borderWidth: 1,
      backgroundColor: 'rgba(247, 85, 122,.5)',
      pointBackgroundColor:'rgba(247, 85, 122,.5)',
      pointHoverBackgroundColor:'rgba(113, 76, 190, 0.5)',
      fill:'origin'
      
    },
    {
      label: 'Data2',
      data: [10, 20, 25, 55, 50, 45, 35, 37, 45, 35, 55, 40],
      borderColor: '#007bff',
      borderWidth: 1,
      backgroundColor: 'rgba(0,123,255,.3)',
      pointBackgroundColor:'rgba(0,123,255,.3)',
      pointHoverBackgroundColor:'rgba(235, 111, 51 , 0.5)',
      fill:'origin'
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

//DoughNut Chart and Pie chart data

export let PieChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: [primaryColor, '#53caed', '#01b8ff', '#f16d75', '#29ccbb'],
      hoverBackgroundColor: [
        '#6259c0',
        '#53cae0',
        '#01b8f0',
        '#f16d70',
        '#29ccb0',
      ],
      borderColor: 'transparent',
      hoverBorderColor: 'transparent',
    },
  ],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
};
export let PieChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
};
export let DoughnutChartType: ChartType = 'doughnut';
export let PieChartType: ChartType = 'pie';

//Radar Chart
export let radarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
};

export let radarChartType: ChartType = 'radar';
export let radarChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Data1',
      data: [65, 59, 66, 45, 56, 55, 40],
      borderColor: 'rgba(113, 76, 190, 0.9)',
      borderWidth: 1,
      backgroundColor: 'rgba(113, 76, 190, 0.5)',
    },
    {
      label: 'Data2',
      data: [28, 12, 40, 19, 63, 27, 87],
      borderColor: 'rgba(235, 111, 51,0.8)',
      borderWidth: 1,
      backgroundColor: 'rgba(235, 111, 51,0.4)',
    },
  ],
  labels: [
    ['Eating', 'Dinner'],
    ['Drinking', 'Water'],
    'Sleeping',
    ['Designing', 'Graphics'],
    'Coding',
    'Cycling',
    'Running',
  ],
};

//Polar Chart
export let polarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
};

export let polarChartType: ChartType = 'polarArea';
export let polarChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [18, 15, 9, 6, 19],
      backgroundColor: [primaryColor, '#53caed', '#01b8ff', '#f16d75', '#29ccbb',singleColor2],
      hoverBackgroundColor: [
        primaryColor,
        '#53caed',
        '#01b8ff',
        '#f16d75',
        '#29ccbb',
        singleColor2
      ],
      borderColor: 'transparent',
    },
  ],
  labels: ['Data1', 'Data2', 'Data3', 'Data4'],
};
