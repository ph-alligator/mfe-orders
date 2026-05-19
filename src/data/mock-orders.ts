export interface Order {
  id: string;
  customer: string;
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
}

export const MOCK_ORDERS: Order[] = [
  { id: 'ORD-1001', customer: 'Acme Corp', total: 1299.0, status: 'shipped' },
  { id: 'ORD-1002', customer: 'Globex', total: 459.5, status: 'pending' },
  { id: 'ORD-1003', customer: 'Initech', total: 89.99, status: 'delivered' },
];
