import OneItem from "./contentContainerComponents/OneItem";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
const AUTHOR_NAMES = gql`
  query Query {
    getAuthors {
      name
      _id
    }
  }
`;

const ContentContainer = (props) => {
  const [authorsList, setAuthorsList] = useState([]);
  const { loading, error, data, refetch } = useQuery(AUTHOR_NAMES);

  useEffect(() => {
    refetch();
    if (data) setAuthorsList(data.getAuthors);
  }, [data, props.pageRefresher, refetch]);

  if (loading)
    return <p className="text-5xl pt-40 text-rose-700 font-bold">Loading...</p>;
  if (error)
    return (
      <p className="text-5xl pt-40 text-rose-700 font-bold">
        Something goes wrong, pls refresh or come later :(
      </p>
    );
  if (!!!data.getAuthors.length) {
    return (
      <p className="w-6/12 text-4xl pt-40 text-rose-700 font-bold">
        The list is Empty right now, you can Add by using the 'Add New One'
        botton
      </p>
    );
  }
  refetch();
  return (
    <div className="fixed left-56 bottom-0 top-40 right-0 p-10 grid gap-y-60 grid-rows-4 grid-cols-4 overflow-auto">
      {authorsList.map((author, i) => (
        <OneItem
          key={i}
          id={author._id}
          authorName={author.name}
          authorStyle={true}
          ranNum={Math.floor(Math.random() * 39) + 0}
        />
      ))}
    </div>
  );
};

export default ContentContainer;

// {/* <OneItem authorName={"Dostoevsky"} title={"The Idiot"} />
// <OneItem authorName={"Dostoevsky"} authorStyle={true} /> */}
