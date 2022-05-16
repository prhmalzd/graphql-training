import React from "react";
import { useState } from "react";

const PageRouteContext = React.createContext({
  pageRoute: "",
  ranEmoji: "",
  pageRouteChanger: (pr) => {},
  setRanEmoji: (emoji) => {},
});

export const PageRouteProvider = (props) => {
  const [pageRoute, setPageRoute] = useState("");
  const [ranEmoj, setRanEmoj] = useState("");

  const pageRouteChanger = (title) => {
    setPageRoute(title);
  };
  const setRanEmoji = (emoji) => {
    setRanEmoj(emoji);
  };

  const contextValue = {
    pageRoute: pageRoute,
    ranEmoji: ranEmoj,
    pageRouteChanger: pageRouteChanger,
    setRanEmoji: setRanEmoji,
  };
  return (
    <PageRouteContext.Provider value={contextValue}>
      {props.children}
    </PageRouteContext.Provider>
  );
};

export default PageRouteContext;
