import React from 'react';
import Greeting from './Greeting';
import ShoppingList from './ShoppingList';
import OrderStatus from './OrderStatus';

function App() {
  const products = ['Хлеб', 'Молоко', 'Яблоки']; // попробуй [] для теста пустоты
  
  const orders = [
    { orderId: 101, status: 'в пути' },
    { orderId: 102, status: 'доставлен' }
  ];

  return (
    <div>
      <Greeting name="Олена" />
      <ShoppingList items={products} />
      {orders.map(order => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App;
