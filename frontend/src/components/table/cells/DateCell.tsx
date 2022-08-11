import { useEffect, useState } from 'react';
import OrderTableCell from './OrderTableCell';

const DateCell = (props: { timestamp: number }) => {
  const [date, setDate] = useState('');
  useEffect(() => {
    setDate(new Date(props.timestamp * 1000).toLocaleDateString('ru'));
  }, [props.timestamp]);
  return <OrderTableCell align="center">{date}</OrderTableCell>;
};

export default DateCell;
