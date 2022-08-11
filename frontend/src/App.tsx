import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CostChart from './components/chart/CostChart';
import OrdersSummary from './components/summary/OrdersSummary';
import OrderTable from './components/table/OrderTable';
import getOrders from './data/api/orders';
import Order from './data/types/order';

const StyledApp = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
  gap: 2em;
`;

const OrdersSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin: 2em 0em;
`;

const App = () => {
  const [orders, setOrders] = useState<Order[] | null>();
  useEffect(() => {
    getOrders().then(setOrders);
  }, []);

  if (orders === null || orders === undefined) {
    return <StyledApp><div>Loading...</div></StyledApp>;
  }

  return (
    <StyledApp>
      <OrdersSection>
        <OrderTable orders={orders} />
        <OrdersSummary orders={orders} />
      </OrdersSection>
      <CostChart orders={orders} />
    </StyledApp>
  );
};

export default App;
