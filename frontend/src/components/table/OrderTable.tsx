import React from 'react';
import styled from 'styled-components';
import Order from '../../data/types/order';
import CostCells from './cells/CostCells';
import DateCell from './cells/DateCell';
import OrderTableCell from './cells/OrderTableCell';
import OrderTableHeadCell from './cells/OrderTableHeadCell';

const ScrollWrapper = styled.div`
  width: 100%;
  max-height: 50vh;
  overflow-y: scroll;
  position: relative;
`;

const TableGrid = styled.div`
  display: grid;
  grid-template-columns: min-content repeat(4, 1fr);
`;

const StyledTableHead = styled(TableGrid)`
  position: sticky;
  top: 0;
  background: #fff;
  margin-bottom: 2px;
`;

const OrderTable = (props: { orders: Order[] }) => (
  <div>
    <ScrollWrapper>
      <StyledTableHead>
        <OrderTableHeadCell>№</OrderTableHeadCell>
        <OrderTableHeadCell>Номер заказа</OrderTableHeadCell>
        <OrderTableHeadCell colSpan={2}>Стоимость</OrderTableHeadCell>
        <OrderTableHeadCell>Дата поставки</OrderTableHeadCell>
      </StyledTableHead>
      <TableGrid>
        {props.orders.map((order, i) => (
          <React.Fragment key={order.id}>
            <OrderTableCell align="end">{i + 1}</OrderTableCell>
            <OrderTableCell align="center">{order.id}</OrderTableCell>
            <CostCells dollar_cost={order.cost_dollars} ruble_cost={order.cost_rubles} />
            <DateCell timestamp={order.date} />
          </React.Fragment>
        ))}
      </TableGrid>
    </ScrollWrapper>
  </div>
);

export default OrderTable;
