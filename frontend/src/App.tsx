import { useEffect, useState } from 'react';
import styled from 'styled-components';
import OrdersSummary from './components/summary/OrdersSummary';
import OrderTable from './components/table/OrderTable';
import getOrders from './data/api/orders';
import Order from './data/types/order';

const StyledApp = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 2em;
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
      <div>
        <OrderTable orders={orders} />
        <OrdersSummary orders={orders} />
      </div>
    </StyledApp>
  );
};

export default App;
