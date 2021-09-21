import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const id = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, id)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, id)}
    </Fragment>
  );
};

export default Modal;
