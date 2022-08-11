import styled from 'styled-components';

const OrderTableCell = styled.td<{ align?: string }>`
  ${(p) => p.align && `text-align: ${p.align};`}
  border-spacing: 2px;
  border-collapse: separate;
  padding: 0.2em 0.5em;
`;

export default OrderTableCell;
