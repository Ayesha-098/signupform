import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? <p>Welcome back, {user.name}!</p> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;