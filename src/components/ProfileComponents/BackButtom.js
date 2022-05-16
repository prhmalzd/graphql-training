import { useNavigate } from "react-router-dom";

const BackButtom = (props) => {
  const navigate = useNavigate();
  const backToPrevPage = () => {
    navigate(-1);
  };
  return (
    <button
      className={`absolute top-10 left-10 text-2xl px-5 py-2 rounded-lg text-white ${
        props.authorStyle
          ? "bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800"
          : "bg-violet-700 hover:bg-violet-600 active:bg-violet-800"
      }`}
      onClick={backToPrevPage}
    >
      Back
    </button>
  );
};

export default BackButtom;
