import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@ph-alligator/ui';
import { MOCK_ORDERS, type Order } from '../../data/mock-orders';

function StatusBadge({ status }: { status: Order['status'] }) {
  const styles = {
    pending: 'bg-amber-100 text-amber-800',
    shipped: 'bg-blue-100 text-blue-800',
    delivered: 'bg-emerald-100 text-emerald-800',
  } as const;

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export function OrdersListPage() {
  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Orders</h1>
        <p className="text-sm text-muted-foreground">
          Manage and review customer orders.
        </p>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>All orders</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50 text-left">
                  <th className="px-6 py-3 font-medium">Order ID</th>
                  <th className="px-6 py-3 font-medium">Customer</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium text-right">Total</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_ORDERS.map((order) => (
                  <tr key={order.id} className="border-b last:border-0">
                    <td className="px-6 py-4 font-medium">{order.id}</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={order.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      ${order.total.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link to={order.id}>
                        <Button type="button" size="sm" variant="outline">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
