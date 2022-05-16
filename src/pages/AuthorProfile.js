import AuthorInformartion from "../components/ProfileComponents/AuthorInformartion";
import BackButtom from "../components/ProfileComponents/BackButtom";

const Profile = () => {
  return (
    <div className="h-screen w-screen bg-violet-100 flex flex-col items-center">
      <BackButtom authorStyle={true} />
      <AuthorInformartion authorStyle={true} />
    </div>
  );
};
export default Profile;
