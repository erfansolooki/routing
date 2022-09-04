import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();
  const logoutHandle = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };
  return (
    <main className="logout bg-white position-absolute" onClick={logoutHandle}>
      <section>
        <p className="mb-1 logoutText">خروج</p>
        <RiLogoutCircleRLine />
      </section>
    </main>
  );
};

export default Logout;
