import { gql, useQuery } from "@apollo/client";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PageRouteContext from "../../store/page-routs-context";
import OtherBooks from "./OtherBooks";

const AUTHOR = gql`
  query GetAuthor($id: ID!) {
    getAuthor(_id: $id) {
      name
      createdAt
    }
  }
`;
const ProfileInformartion = () => {
  const [ranEmoji, setRanEmoji] = useState("");
  const pageCtx = useContext(PageRouteContext);

  const [authorName, setAuthorName] = useState("");
  const [authorDate, setAuthorDate] = useState("");

  const { id } = useParams();

  const { loading, error, data } = useQuery(AUTHOR, {
    variables: { id: id },
  });

  useEffect(() => {
    const emoji = String.fromCodePoint(pageCtx.ranEmoji);
    if (emoji.length === 2) setRanEmoji(emoji);
    else setRanEmoji(String.fromCodePoint(0x1f414));
    if (data) {
      setAuthorName(data.getAuthor.name);
      const date = new Date(data.getAuthor.createdAt);
      const ranNum = Math.floor(Math.random() * 222) + 0;
      setAuthorDate(date.getFullYear() - ranNum);
    }
  }, [data, pageCtx.ranEmoji]);

  if (loading)
    return <p className="text-5xl pt-40 text-rose-700 font-bold">Loading...</p>;

  if (error)
    return (
      <p className="text-3xl pt-40 text-rose-700 font-bold">
        Something goes wrong, pls refresh or come later :(
      </p>
    );

  return (
    <Fragment>
      <div className="w-7/12 flex flex-col items-center pt-4 text-3xl font-semibold gap-3">
        <span
          className={
            "text-8xl p-5 pb-8 cursor-default border-2 rounded-lg bg-emerald-200 border-emerald-500"
          }
        >
          {ranEmoji}
        </span>
        <p>{authorName}</p>
        <p>{authorDate}</p>
        <p className="text-center border-b-2 border-black pb-5">
          Est aliquip veniam aliqua veniam exercitation consectetur pariatur.
          Ipsum labore amet ullamco commodo consectetur exercitation ipsum velit
          officia amet. Sit occaecat non et velit ex. Nostrud aute pariatur anim
          magna id officia...
        </p>
        <p>Books</p>
      </div>
      <OtherBooks authorId={id} />
    </Fragment>
  );
};

export default ProfileInformartion;
