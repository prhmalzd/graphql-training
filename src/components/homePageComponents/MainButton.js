import { useContext } from "react";
import { Link } from "react-router-dom";
import PageRouteContext from "../../store/page-routs-context";

const MainButton = (props) => {
  const pageRoutCtx = useContext(PageRouteContext);

  const onClickRoutes = () => {
    pageRoutCtx.pageRouteChanger(props.title);
  };

  return (
    <Link to="/categories">
      <div
        className={`text-neutral-200 rounded-3xl shadow-neutral-500 cursor-pointer shadow-lg p-24 font-mono text-5xl   active:shadow-md text-center ${
          props.authorStyle
            ? "bg-emerald-700 active:bg-emerald-700 hover:bg-emerald-600"
            : "bg-violet-700 active:bg-violet-700 hover:bg-violet-600"
        }`}
        onClick={onClickRoutes}
      >
        {props.icon}
        <p className="mt-8">{props.title}</p>
      </div>
    </Link>
  );
};

export default MainButton;
