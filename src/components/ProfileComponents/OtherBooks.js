import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import OneBook from "./otherBookComponents/OneBook";
import AddBook from "./otherBookComponents/AddBook";

const BOOKS_BY_AUTHOR = gql`
  query Books($id: ID!) {
    getAuthor(_id: $id) {
      books {
        title
        _id
      }
    }
  }
`;
const OtherBooks = (props) => {
  const [refreshPage, setRefreshPage] = useState(true);
  const [booksList, setBooksList] = useState([]);
  const { loading, error, data, refetch } = useQuery(BOOKS_BY_AUTHOR, {
    variables: { id: props.authorId },
  });

  useEffect(() => {
    refetch();
    if (data) {
      setBooksList(data.getAuthor.books);
    }
  }, [data, refreshPage, refetch]);

  if (loading)
    return <p className="text-2xl pt-4 text-rose-700 font-bold">Loading...</p>;

  if (error)
    return (
      <p className="text-2xl pt-4 text-rose-700 font-bold">
        Something goes wrong, pls refresh or come later :(
      </p>
    );

  const refresher = () => {
    setRefreshPage((refreshPage) => !refreshPage);
  };
  if (!!!data.getAuthor.books.length) {
    return (
      <div className="flex flex-col items-center">
        <p className="text-2xl py-4 text-rose-700 font-bold text-center">
          The list is Empty right now
        </p>
        <AddBook refresher={refresher} authorId={props.authorId} />
      </div>
    );
  }
  return (
    <div className="flex gap-5 mt-6 py-4 px-5 rounded-lg border-2 border-violet-400">
      {booksList.map((book, i) => (
        <OneBook key={i} id={book._id} title={book.title} />
      ))}
      <AddBook refresher={refresher} authorId={props.authorId} />
    </div>
  );
};
export default OtherBooks;
