import styled from 'styled-components';

const OrderTableCell = styled.div<{ colSpan?: number, align?: string }>`
  ${(p) => p.colSpan && `grid-column-end: span ${p.colSpan};`}
  ${(p) => p.align && `text-align: ${p.align};`}
  margin: 2px;
  padding: 0.2em 0.5em;
  background: #0001;

  :nth-child(8n+5), :nth-child(8n+6), :nth-child(8n+7), :nth-child(8n+8) {
    background: #0002;
  }
`;

export default OrderTableCell;
