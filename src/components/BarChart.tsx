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
      // position: 'top' as const,
      display: false,
    },

    // title: {
    //   display: true,
    //   text: 'Chart.js Bar Chart',
    // },
    maintainAspectRatio: false,
  },
};

const labels = ['Bio', 'Phy', 'Chem', 'Eco', 'Eng', 'Bus', 'Sci', 'Lit'];

const data = {
  labels,
  datasets: [
    {
      // label: false,
      data: [90, 75, 50, 50, 40, 40, 55, 80],
      backgroundColor: 'rgba(37, 99, 235, 0.8)',
      barThickness: 10,
    },
  ],
};

function BarChart() {
  return (
    <div className="w-full">
      <h3 className="ml-4">Quiz Performance</h3>
      <div className=" h-1/6">
        <Bar
          data={data}
          options={options}
          style={{ width: '90%', marginLeft: '4%' }}
        />
      </div>
    </div>
  );
}

export default BarChart;
