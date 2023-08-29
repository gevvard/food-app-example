import { useContext } from 'react';

import CartIcon from "../Carts/CartIcon";
import CartContext from '../../store/cart-context';
import classes from './HaderCardButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  // Ensure cartCtx.items is an array before using reduce
  console.log('cartCtx: ', cartCtx, cartCtx.items)
  const numberOfCartItems = cartCtx.items
    ? cartCtx.items.reduce((curNumber, item) => curNumber + item.amount, 0)
    : 0;

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
