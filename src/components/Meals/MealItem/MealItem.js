import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ name, description, price, id }) => {
  const cartCTX = useContext(CartContext);

  const priceItem = `$${price.toFixed(2)}`;

  const addHandler = (amount) => {
    cartCTX.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceItem}</div>
      </div>
      <div>
        <MealItemForm id={id} onAdd={addHandler} />
      </div>
    </li>
  );
};

export default MealItem;
