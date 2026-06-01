import OrderCard from './OrderCard';

export default function OrdersTable() {
  const orders = [
    {
      id: 1,
      orderId: 'DS-4821',
      customer: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      picture: null,
      product: 'Notion Study Template',
      amount: '₹299',
      status: 'Paid',
      date: '2 mins ago',
    },
    {
      id: 2,
      orderId: 'DS-4822',
      customer: 'Aisha Khan',
      email: 'aisha@gmail.com',
      picture: null,
      product: 'Canva Invitation Pack',
      amount: '₹499',
      status: 'Paid',
      date: '15 mins ago',
    },
    {
      id: 3,
      orderId: 'DS-4823',
      customer: 'Arjun Patel',
      email: 'arjun@gmail.com',
      picture: null,
      product: 'Productivity Ebook',
      amount: '₹199',
      status: 'Paid',
      date: '1 hour ago',
    },
    {
      id: 4,
      orderId: 'DS-4824',
      customer: 'Sneha Verma',
      email: 'sneha@gmail.com',
      picture: null,
      product: 'Canva Invitation Pack',
      amount: '₹499',
      status: 'Paid',
      date: '3 hours ago',
    },
  ];

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
}
