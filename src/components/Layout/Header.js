import React from "react";
import { Fragment } from "react";
import classes from "./Header.module.css";
import MealsPic from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order</h1>
        <HeaderCartButton show={props.showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsPic} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
