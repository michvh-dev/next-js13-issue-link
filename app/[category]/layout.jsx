import * as React from "react";
import Nav from "../../components/Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      {children}
    </div>
  );
};

export default Layout;
