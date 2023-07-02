import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Bio', 'Phy', 'Chem', 'Eco', 'Eng', 'Bus', 'Sci', 'Lit'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [90, 75, 50, 50, 40, 40, 55, 80],
      backgroundColor: 'rgba(37, 99, 235, 0.8)',
    },
  ],
};

function BarChart() {
  return (
    <div className="w-fit">
      <h3>Quiz Performance</h3>
      <div className=" h-1/6">
        <Bar data={data} options={options} style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default BarChart;
