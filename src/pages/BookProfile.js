import BookInformation from "../components/ProfileComponents/BookInformation";
import BackButtom from "../components/ProfileComponents/BackButtom";

const BookProfile = () => {
  return (
    <div className="h-screen w-screen bg-violet-100 flex flex-col items-center">
      <BackButtom />
      <BookInformation />
    </div>
  );
};
export default BookProfile;
