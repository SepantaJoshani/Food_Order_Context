import { Fragment, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false)

  const showCartHandler = ()=>{
    setCartIsVisible(true)
  }

  const hideCartHandler =()=>{
    setCartIsVisible(false)
  }

  return (
    <Fragment>
     {cartIsVisible && <Cart hideCart={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
