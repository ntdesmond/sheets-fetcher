import { useMemo } from 'react';
import Order from '../../data/types/order';
import floorToFixed from '../utils/rounding';

const OrdersSummary = (props: { orders: Order[] }) => {
  const totalUsdCost = useMemo(() => floorToFixed(
    props.orders.reduce((sum, order) => sum + order.cost_dollars, 0),
    2,
  ), [props.orders]);

  const totalRubCost = useMemo(() => floorToFixed(
    props.orders.reduce((sum, order) => sum + order.cost_rubles, 0),
    2,
  ), [props.orders]);

  return (
    <div>
      <p>Всего заказов: <b>{props.orders.length}</b></p>
      <p>Общая стоимость: <b>{totalUsdCost} $ ({totalRubCost} ₽)</b></p>
    </div>
  );
};

export default OrdersSummary;
