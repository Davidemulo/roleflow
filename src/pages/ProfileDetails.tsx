import { useParams } from "react-router-dom";

const ProfileDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Profile Details</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default ProfileDetails;