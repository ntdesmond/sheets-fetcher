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
  // Orders storage
  const [orders, setOrders] = useState<Order[] | null>();

  // For initial order fetch
  const [shouldUpdate, setShouldUpdate] = useState(true);

  // Manual control of autofetching
  const [autoUpdate, setAutoUpdate] = useState(true);

  useEffect(() => {
    if (!shouldUpdate || !autoUpdate) {
      return;
    }

    setShouldUpdate(false);
    getOrders().then(
      (newOrders: Order[]) => {
        newOrders.sort((a, b) => a.id - b.id);
        setOrders(newOrders);

        // Fetch orders every 2 seconds
        setTimeout(
          () => setShouldUpdate(true),
          2000,
        );
      },
      // On error retry immediately
      () => setShouldUpdate(true),
    );
  }, [shouldUpdate, autoUpdate]);

  // Display loading before orders are fetched for the first time
  if (orders === null || orders === undefined) {
    return <StyledApp><div>Loading...</div></StyledApp>;
  }

  return (
    <StyledApp>
      <OrdersSection>
        <label htmlFor="autoupdate-tick">
          <input onChange={(e) => setAutoUpdate(e.target.checked)} id="autoupdate-tick" type="checkbox" defaultChecked />
          <span>Обновлять автоматически</span>
        </label>
        <OrderTable orders={orders} />
        <OrdersSummary orders={orders} />
      </OrdersSection>
      <CostChart orders={orders} />
    </StyledApp>
  );
};

export default App;
