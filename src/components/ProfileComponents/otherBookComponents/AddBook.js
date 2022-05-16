import { gql, useMutation } from "@apollo/client";
import { Fragment, useState } from "react";
import AddingArea from "../../categoriesComponents/containerComponents/SortingComponents/AddingArea";
import SortButton from "../../categoriesComponents/containerComponents/SortingComponents/SortButton";

const CREATE_BOOK = gql`
  mutation CreateBook($title: String!, $authorId: ID!) {
    createBook(title: $title, authorId: $authorId) {
      msg
    }
  }
`;

const AddBook = (props) => {
  const [createBook] = useMutation(CREATE_BOOK);
  const [showAddingArea, setShowAddingArea] = useState(false);

  const onShow = () => {
    setShowAddingArea(true);
  };
  const onHide = (e) => {
    const id = e.target.id;
    if (id === "backDrop" || id === "closeBtn") setShowAddingArea(false);
  };
  const onSubmitName = async (titleRef) => {
    try {
      const { data } = await createBook({
        variables: { title: titleRef, authorId: props.authorId },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    setShowAddingArea(false);
    props.refresher();
  };
  return (
    <Fragment>
      {showAddingArea && (
        <AddingArea onHide={onHide} onSubmitName={onSubmitName} />
      )}
      <SortButton title={"Add New One"} onShow={onShow} />
    </Fragment>
  );
};

export default AddBook;
