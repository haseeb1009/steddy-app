import { useHistory } from "react-router-dom";
import home from "../../home.svg";
import "./Header.scss";

const Header = ({ title }) => {
  const history = useHistory();

  return (
    <div className="header">
      <h2>{title}</h2>
      <img
        onClick={() => history.push("./")}
        src={home}
        height="60px"
        alt="QR Code"
      />
    </div>
  );
};

export default Header;
