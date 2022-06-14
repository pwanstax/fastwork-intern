import React, {Fragment} from "react";

import MainNavigation from "./main-navigation";
import Breadcrumb from "./breadcrumb";
import SubNavigation from "./sub-navigation";

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <SubNavigation />
      <Breadcrumb />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
