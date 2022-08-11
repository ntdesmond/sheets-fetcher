import floorToFixed from '../../utils/rounding';
import OrderTableCell from './OrderTableCell';

const CostCells = (props: { dollar_cost: number, ruble_cost: number }) => (
  <>
    <OrderTableCell align="right">{floorToFixed(props.dollar_cost, 2)} $</OrderTableCell>
    <OrderTableCell align="right">{floorToFixed(props.ruble_cost, 2)} ₽</OrderTableCell>
  </>
);

export default CostCells;
