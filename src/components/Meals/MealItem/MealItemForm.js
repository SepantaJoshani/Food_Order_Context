import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [error, setError] = useState(false);

  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const numericEnteredAmount = +enteredAmount;

    if (
      enteredAmount.length === 0 ||
      numericEnteredAmount < 1 ||
      numericEnteredAmount > 5
    ) {
      setError(true);
      return;
    }

    props.onAdd(numericEnteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {error && <p>Invalid Number (choose between 1-5)</p>}
    </form>
  );
};

export default MealItemForm;
