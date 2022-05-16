import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState, useContext, Fragment } from "react";
import PageRouteContext from "../../store/page-routs-context";
import OtherBooks from "./OtherBooks";

const BOOK = gql`
  query GetBook($id: ID!) {
    getBook(_id: $id) {
      title
      author {
        _id
        name
      }
    }
  }
`;

const ProfileInformartion = (props) => {
  const [ranEmoji, setRanEmoji] = useState("");
  const pageCtx = useContext(PageRouteContext);
  const { id } = useParams();
  const { loading, error, data } = useQuery(BOOK, { variables: { id: id } });
  const [bookInfo, setBookInfo] = useState({
    title: "",
    author: { name: "", _id: "" },
  });
  useEffect(() => {
    const emoji = String.fromCodePoint(pageCtx.ranEmoji);
    if (emoji.length === 2) setRanEmoji(emoji);
    else setRanEmoji(String.fromCodePoint(0x1f424));
    if (data) {
      setBookInfo(data.getBook);
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
            "text-8xl p-5 pb-8 cursor-default border-2 rounded-lg bg-violet-200 border-violet-500"
          }
        >
          {ranEmoji}
        </span>
        <p>{bookInfo.title}</p>
        <p>{`Author: ${bookInfo.author.name}`}</p>
        <p className="text-center border-b-2 border-black pb-5">
          Est aliquip veniam aliqua veniam exercitation consectetur pariatur.
          Ipsum labore amet ullamco commodo consectetur exercitation ipsum velit
          officia amet. Sit occaecat non et velit ex. Nostrud aute pariatur anim
          magna id officia...
        </p>
        <p>Other Books of this Author</p>
      </div>
      <OtherBooks authorId={bookInfo.author._id} />
    </Fragment>
  );
};

export default ProfileInformartion;
