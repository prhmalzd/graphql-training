import { useRef } from "react";
import Modal from "../../../../lib/ModalOverlay";

const AddingArea = (props) => {
  const nameRef = useRef();
  const onSubmitNewName = () => {
    const name = nameRef.current.value;
    props.onSubmitName(name);
  };
  return (
    <Modal onHide={props.onHide}>
      <span
        className="cursor-pointer relative self-start left-5 text-2xl"
        onClick={props.onHide}
        id="closeBtn"
      >
        &#10060;
      </span>
      <input
        type="text"
        placeholder="type the name..."
        className="outline-none w-9/12 text-xl bg-yellow-400 border-b-2 border-rose-500 placeholder:text-rose-500 pb-1 text-rose-700"
        ref={nameRef}
      />
      <button
        className="bg-rose-600 text-neutral-100 hover:bg-rose-500 active:bg-rose-700 rounded-lg px-7 py-2 text-xl font-bold"
        onClick={onSubmitNewName}
      >
        Add
      </button>
    </Modal>
  );
};

export default AddingArea;
