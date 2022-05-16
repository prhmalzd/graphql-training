import { useContext } from "react";
import PageRouteContext from "../../../../store/page-routs-context";

const NavButton = (props) => {
  const pageCtx = useContext(PageRouteContext);
  const onChangePageStyle = () => {
    pageCtx.pageRouteChanger(props.title);
  };
  return (
    <div
      className={`flex gap-2 rounded-xl px-5 py-2 cursor-pointer  ${
        props.authorStyle
          ? "bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900"
          : "bg-violet-800 hover:bg-violet-700 active:bg-violet-900"
      }`}
      onClick={onChangePageStyle}
    >
      {props.icon}
      <p className="text-2xl font-bold text-neutral-200">{props.title}</p>
    </div>
  );
};
export default NavButton;
