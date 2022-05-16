import Container from "../components/categoriesComponents/Container";
import Navigation from "../components/categoriesComponents/Navigation";
import { useContext, useEffect, useState } from "react";
import PageRouteContext from "../store/page-routs-context";

const Categories = () => {
  const PageStyleCtx = useContext(PageRouteContext);
  const [pageColor, setPageColor] = useState();
  useEffect(() => {
    if (PageStyleCtx.pageRoute === "Books") {
      setPageColor(true);
    } else {
      setPageColor(false);
    }
  }, [PageStyleCtx.pageRoute]);
  return (
    <div className="h-screen bg-violet-100">
      <Navigation pageColor={pageColor} />
      <Container pageColor={pageColor} />
    </div>
  );
};

export default Categories;
