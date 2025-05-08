import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Button from "../components/common/Button";

const Dashboard = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <>
          <p>Welcome back, {user.name}!</p>
          <Button type="button" onClick={handleLogout}>Logout</Button> {/* Logout button */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
