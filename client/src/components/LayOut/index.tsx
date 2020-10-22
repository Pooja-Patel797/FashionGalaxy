import React, { useEffect } from "react";
import { Header } from "../header";
import { Footer } from "../footer";

export const Layout = (props: any) => {
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
