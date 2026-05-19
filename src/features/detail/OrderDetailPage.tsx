import { Link, useParams } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@org/ui';
import { MOCK_ORDERS } from '../../data/mock-orders';

export function OrderDetailPage() {
  const { orderId } = useParams();
  const order = MOCK_ORDERS.find((o) => o.id === orderId);

  if (!order) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Order not found</CardTitle>
        </CardHeader>
        <CardContent>
          <Link to="..">
            <Button type="button" variant="outline">
              Back to list
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{order.id}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <dt className="text-muted-foreground">Customer</dt>
          <dd>{order.customer}</dd>
          <dt className="text-muted-foreground">Total</dt>
          <dd>${order.total.toFixed(2)}</dd>
          <dt className="text-muted-foreground">Status</dt>
          <dd className="capitalize">{order.status}</dd>
        </dl>
        <Link to="..">
          <Button type="button" variant="secondary">
            Back to orders
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
