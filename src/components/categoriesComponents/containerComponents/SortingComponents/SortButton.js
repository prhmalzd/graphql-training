const SortButton = (props) => {
  return (
    <button
      className={`bg-rose-600 rounded-lg px-5 py-2 text-xl font-bold text-rose-50 hover:bg-rose-500 active:bg-rose-700 ${
        props.place
          ? "absolute bottom-10 bg-yellow-300 text-neutral-700 hover:bg-yellow-200 active:bg-yellow-400"
          : ""
      }`}
      onClick={props.onShow}
    >
      {props.title}
    </button>
  );
};

export default SortButton;
