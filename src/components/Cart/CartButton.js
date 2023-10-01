import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const CartButton = (props) => {
  const items = useSelector((state) => state.cart.cartItems);

  let totalAmount = 0;

  for (let item of items) {
    totalAmount += item.amount;
  }

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
