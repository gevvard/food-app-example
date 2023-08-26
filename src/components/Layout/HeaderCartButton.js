import React from 'react';

import classes from "./HaderCardButton.module.css"
import CartIcon from "../Carts/CartIcon";
const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} >
      <span><CartIcon/></span>
      <span className={classes.icon} >Your Cart</span>
      <span className={classes.badge} >3</span>
    </button>
  );
};

export default HeaderCartButton;