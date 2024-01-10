import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Body from "./Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
