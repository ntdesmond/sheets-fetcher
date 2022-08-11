import { useEffect, useState } from 'react';
import styled from 'styled-components';
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

  return (
    <StyledApp>
      {orders != null && <OrderTable orders={orders} />}
    </StyledApp>
  );
};

export default App;
