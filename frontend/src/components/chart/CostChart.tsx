import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import styled from 'styled-components';
import { useMemo } from 'react';
import Order from '../../data/types/order';
import formatDate from '../utils/date';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 50%;
`;

const CostChart = (props: { orders: Order[] }) => {
  const data = useMemo<ChartData<'line'>>(() => {
    // Sort orders by date
    const ordersByDate = Array.from(props.orders).sort((a, b) => a.date - b.date);

    // Make the points
    return {
      labels: ordersByDate.map(({ date }) => formatDate(date)),
      datasets: [
        {
          label: 'Стоимость, $',
          data: ordersByDate.map(({ cost_dollars }) => cost_dollars),
          borderColor: 'rgb(82, 99, 255)',
          backgroundColor: 'rgba(82, 99, 255, 0.5)',
        },
      ],
    };
  }, [props.orders]);

  return <ChartWrapper><Line data={data} /></ChartWrapper>;
};

export default CostChart;
