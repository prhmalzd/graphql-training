import MainButton from "../components/homePageComponents/MainButton";
import { author, book } from "../lib/variables";

const HomePage = () => {
  return (
    <div className="bg-fuchsia-200 w-screen h-screen flex justify-center items-center gap-10">
      <MainButton title="Books" icon={book} />
      <MainButton title="Authors" icon={author} authorStyle={true} />
    </div>
  );
};

export default HomePage;
