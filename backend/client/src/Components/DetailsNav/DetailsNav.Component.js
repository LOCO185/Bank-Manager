import "./DetailsNav.css";
// import Users from "../Users/Users";
import { Link } from "react-router-dom";

function DetailsNav() {
  return (
    <div className="details-nav">
      <ol>
      <Link to="/users">
        <li>
          <h3>Users</h3> 
        </li>
        </Link>
        <li>
          <h3>Add Users</h3>
        </li>
        <li>
          <h3>Transfers</h3>
        </li>
        <li>
          <h3>Withdraw</h3>
        </li>
        <li>
          <h3>Deposit</h3>
        </li>
      </ol>
    </div>
  );
}

export default DetailsNav;