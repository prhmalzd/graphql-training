const OneBook = (props) => {
  return (
    <div className="w-48 cursor-pointer text-center bg-violet-600 text-white rounded-lg p-5 pt-2 text-xl hover:bg-violet-500 active:bg-violet-700">
      <span className="text-7xl">&#128366;</span>
      <p>{props.title}</p>
      <p></p>
    </div>
  );
};

export default OneBook;
