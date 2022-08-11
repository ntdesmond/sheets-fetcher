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

const StyledTable = styled.table`
  border-spacing: 4px;
  border-collapse: separate;
`;

const StyledRow = styled.tr`
  :nth-child(2n) > td {
    background: #0002;
  }
  :nth-child(2n+1) > td {
    background: #0001;
  }
`;

const StyledTableHead = styled.thead`
  position: sticky;
  top: 0;
  background: #fff;
  margin-bottom: 2px;
`;

const OrderTable = (props: { orders: Order[] }) => (
  <ScrollWrapper>
    <StyledTable>
      <StyledTableHead>
        <tr>
          <OrderTableHeadCell>№</OrderTableHeadCell>
          <OrderTableHeadCell>Номер заказа</OrderTableHeadCell>
          <OrderTableHeadCell colSpan={2}>Стоимость</OrderTableHeadCell>
          <OrderTableHeadCell>Дата поставки</OrderTableHeadCell>
        </tr>
      </StyledTableHead>
      <tbody>
        {props.orders.map((order, i) => (
          <StyledRow key={order.id}>
            <OrderTableCell align="right">{i + 1}</OrderTableCell>
            <OrderTableCell align="center">{order.id}</OrderTableCell>
            <CostCells dollar_cost={order.cost_dollars} ruble_cost={order.cost_rubles} />
            <DateCell timestamp={order.date} />
          </StyledRow>
        ))}
      </tbody>
    </StyledTable>
  </ScrollWrapper>
);

export default OrderTable;
