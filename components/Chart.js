import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, ArcElement, Tooltip, Filler, Legend } from 'chart.js';
import { Doughnut, Pie, Bar, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, ArcElement, Tooltip, Filler, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [
    {
      label: '# of Votes',
      data: [5, 10, 15, 20],
      backgroundColor: [
        'rgba(239 68 68)',
        'rgba(59 130 246)',
        'rgba(250, 204, 21)',
        'rgba(16 185 129)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

export const dataArea = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [10, 5, 15, 20],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const optionBar = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
  },
};

const optionHorizontalBar = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
  },
};


export function DoughnutChart() {
  return <Doughnut data={data} />
}

export function PieChart() {
  return <Pie data={data} />
}

export function BarChart() {
  return <Bar options={optionBar} data={data} />
}

export function HorizontalBarChart() {
  return <Bar options={optionHorizontalBar} data={data} />
}

export function LineChart() {
  return <Line options={optionBar} data={data} />
}

export function AreaChart() {
  return <Line options={optionBar} data={dataArea} />
}