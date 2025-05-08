import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome to your profile page, User ID: {userId}</p>
    </div>
  );
};

export default Profile;