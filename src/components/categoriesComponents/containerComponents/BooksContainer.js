import OneItem from "./contentContainerComponents/OneItem";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
const BOOKS_NAMES = gql`
  query Query {
    getBooks {
      _id
      title
      author {
        name
      }
    }
  }
`;

const ContentContainer = () => {
  const [booksList, setBooksList] = useState([]);
  const { loading, error, data, refetch } = useQuery(BOOKS_NAMES);

  useEffect(() => {
    refetch();
    if (data) setBooksList(data.getBooks);
  }, [data, refetch]);

  if (loading)
    return <p className="text-5xl pt-40 text-rose-700 font-bold">Loading...</p>;
  if (error)
    return (
      <p className="text-5xl pt-40 text-rose-700 font-bold">
        Something goes wrong, pls refresh or come later :(
      </p>
    );
  if (!!!data.getBooks.length) {
    return (
      <p className="w-6/12 text-4xl pt-40 text-rose-700 font-bold">
        The list is Empty right now.
        <br />
        Go to the Authors section , Select the Author, then Add new Books.
      </p>
    );
  }
  return (
    <div className="fixed left-56 bottom-0 top-40 right-0 p-10 grid gap-y-60 grid-rows-4 grid-cols-4 overflow-auto">
      {booksList.map((book, i) => (
        <OneItem
          key={i}
          id={book._id}
          authorName={book.author.name}
          title={book.title}
          ranNum={Math.floor(Math.random() * 39) + 0}
        />
      ))}
    </div>
  );
};

export default ContentContainer;
