import { useState } from "react";
import AuthorContainer from "./containerComponents/AuthorContainer";
import BooksContainer from "./containerComponents/BooksContainer";
import Sorting from "./containerComponents/Sorting";

const Container = (props) => {
  const [pageRefresher, setPageRefresher] = useState(true);
  const refresher = () => {
    setPageRefresher((pageRefresher) => !pageRefresher);
  };
  return (
    <div className="flex justify-center">
      <Sorting pageColor={props.pageColor} refresher={refresher} />
      {props.pageColor ? (
        <BooksContainer />
      ) : (
        <AuthorContainer pageRefresher={pageRefresher} />
      )}
    </div>
  );
};
export default Container;
