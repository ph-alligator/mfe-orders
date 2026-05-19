import { Route, Routes } from 'react-router-dom';
import { OrdersListPage } from './features/list/OrdersListPage';
import { OrderDetailPage } from './features/detail/OrderDetailPage';

export default function App() {
  return (
    <Routes>
      <Route index element={<OrdersListPage />} />
      <Route path=":orderId" element={<OrderDetailPage />} />
    </Routes>
  );
}
