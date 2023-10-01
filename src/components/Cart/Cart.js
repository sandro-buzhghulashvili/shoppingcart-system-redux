import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const Cart = (props) => {
  const items = useSelector((state) => state.cart.cartItems);
  console.log(items);
  const cartItems = items.map((item) => {
    return (
      <CartItem
        key={item.id}
        item={{
          id: item.id,
          title: item.name,
          quantity: item.amount,
          total: item.price * item.amount,
          price: item.price,
        }}
      />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{items[0] ? cartItems : <h1>There are no items in the cart</h1>}</ul>
    </Card>
  );
};

export default Cart;
