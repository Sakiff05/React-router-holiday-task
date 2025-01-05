import { Outlet } from "react-router-dom";
import UserNav from "../../components/user/navbar/UserNav";
import UserFooter from "../../components/user/footer/UserFooter";

function UserRoot() {
  return (
    <div>
      <UserNav />
      <Outlet />
      <UserFooter />
    </div>
  );
}

export default UserRoot;
