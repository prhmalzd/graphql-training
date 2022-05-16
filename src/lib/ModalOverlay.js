import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-o left-0 w-screen h-screen z-20 bg-black/50 animate-show flex justify-center items-center"
      onClick={props.onHide}
      id="backDrop"
    >
      {props.children}
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <Backdrop onHide={props.onHide}>
      <div className="w-4/12 h-auto pb-16 pt-5 bg-yellow-400 flex flex-col items-center justify-center gap-7 rounded-2xl">
        {props.children}
      </div>
    </Backdrop>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <ModalOverlay onHide={props.onHide}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
