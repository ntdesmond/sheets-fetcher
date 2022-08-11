import OrderTableCell from './OrderTableCell';

const financial = (cost: number) => (Math.floor(cost * 100) / 100).toFixed(2);

const CostCells = (props: { dollar_cost: number, ruble_cost: number }) => (
  <>
    <OrderTableCell align="end">{financial(props.dollar_cost)} $</OrderTableCell>
    <OrderTableCell align="end">{financial(props.ruble_cost)} ₽</OrderTableCell>
  </>
);

export default CostCells;
