import React, { useEffect } from "react";
import { Header } from "../header";
import { Footer } from "../footer";

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
