import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PageRouteContext from "../../../../store/page-routs-context";

const OneItem = (props) => {
  const navigate = useNavigate();

  const random = "0x1F" + (Number(props.ranNum) + 400);
  const ranEmoji = String.fromCodePoint(random);

  const pageCtx = useContext(PageRouteContext);

  const goToProfile = () => {
    pageCtx.setRanEmoji(random);
    if (props.authorStyle) {
      navigate(`/authors/${props.id}`, { replace: false });
    } else {
      navigate(`/books/${props.id}`, { replace: false });
    }
  };
  return (
    <div
      className={`h-56 w-56 text-center rounded-xl flex flex-col justify-center items-center text-3xl font-bold text-white gap-4 cursor-pointer ${
        props.authorStyle
          ? "bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900"
          : "gap-2 text-2xl bg-violet-800 hover:bg-violet-700 active:bg-violet-900"
      }`}
      onClick={goToProfile}
    >
      <span className={`${props.authorStyle ? "text-8xl" : "text-6xl"}`}>
        {ranEmoji}
      </span>
      <p>{props.title}</p>
      <p className={`${props.authorStyle ? "" : "text-xl"}`}>
        {props.authorName}
      </p>
    </div>
  );
};
export default OneItem;
