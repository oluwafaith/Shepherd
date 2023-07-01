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

export const options = {
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
    <div>
      <h3>Quiz performance</h3>
      <Bar data={data} options={options} style={{ width: '10%' }} />
    </div>
  );
}

export default BarChart;
