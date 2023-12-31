import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      titleAlign: 'center',
      backgroundColor: 'white',
      titleColor: 'black',
      bodyColor: 'gray',
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 35,
      },
    },
    x: {},
  },
};

const labels = ['Bio', 'Phy', 'Chem', 'Eco', 'Eng', 'Bus', 'Sci', 'Lit'];

const data = {
  labels,

  datasets: [
    {
      data: [90, 75, 50, 50, 40, 40, 55, 80],
      backgroundColor: 'rgba(37, 99, 235, 0.8)',
      barThickness: 10,
      label: 'latest quiz score',
    },
  ],
};

function BarChart() {
  return (
    <div className="md:w-full">
      <h3 className="ml-4 font-semibold">Quiz Performance</h3>
      <div className=" h-1/6">
        <Bar
          data={data}
          options={options}
          style={{ width: '90%', height: '60%', marginLeft: '4%' }}
        />
      </div>
    </div>
  );
}

export default BarChart;
