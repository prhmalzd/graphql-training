import { useState } from "react";
import AddingArea from "./SortingComponents/AddingArea";
import SortButton from "./SortingComponents/SortButton";
import { gql, useMutation } from "@apollo/client";
import NavButton from "./SortingComponents/NavButton";
import { navbook, navauthor } from "../../../lib/variables";

const CREATE_AUTHOR = gql`
  mutation CreateAuthor($name: String!) {
    createAuthor(name: $name) {
      msg
    }
  }
`;

const Sorting = (props) => {
  const [creatingAuthor] = useMutation(CREATE_AUTHOR);
  const [showAddingArea, setShowAddingArea] = useState(false);

  const onHideAddingArea = (e) => {
    const id = e.target.id;
    if (id === "backDrop" || id === "closeBtn") setShowAddingArea(false);
  };

  const onShowAddingArea = () => {
    setShowAddingArea(true);
  };

  const onSubmitName = async (nameRef) => {
    try {
      const {
        data: { createAuthor: response },
      } = await creatingAuthor({
        variables: { name: nameRef },
      });
      console.log(response.msg);
    } catch (err) {
      console.log(err);
    }
    setShowAddingArea(false);
    props.refresher();
  };

  return (
    <div
      className={`flex flex-col items-center ${
        props.pageColor ? "bg-violet-800" : "bg-emerald-800"
      } w-56 fixed left-0 bottom-0 top-40 gap-5 py-5 justify-start`}
    >
      {showAddingArea && (
        <AddingArea onHide={onHideAddingArea} onSubmitName={onSubmitName} />
      )}
      <div className="flex flex-col gap-6">
        <NavButton title="Books" icon={navbook} />
        <NavButton title="Authors" icon={navauthor} authorStyle={true} />
      </div>
      {!props.pageColor && (
        <SortButton
          title={"Add New Author"}
          place={true}
          onShow={onShowAddingArea}
        />
      )}
    </div>
  );
};
export default Sorting;
