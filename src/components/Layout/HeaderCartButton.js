import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [animate, setAnimate] = useState(false);
  const cartCtx = useContext(CartContext);
  const cartItemsNum = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const animateClass = `${classes.button} ${animate ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 300);
    setAnimate(true);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);
  return (
    <button className={animateClass} onClick={props.show}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.Cart__txt}>Your Cart</span>
      <span className={classes.badge}>{cartItemsNum}</span>
    </button>
  );
};

export default HeaderCartButton;
