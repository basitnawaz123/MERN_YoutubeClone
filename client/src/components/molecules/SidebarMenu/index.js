import React, { Fragment } from "react";

import MenuList from "../../atoms/Lists";
import { MdHome, MdExplore } from "react-icons/md";
import "./style.css";
const SidebarMenu = () => {
  const menuItems = [
    {
      id: 1,
      icon: <MdHome />,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      icon: <MdExplore />,
      title: "Upload",
      link: "/upload",
    },
    {
      id: 3,
      icon: <MdExplore />,
      title: "Shorts",
      link: "",
    },

    {
      id: 4,
      icon: <MdExplore />,
      title: "Subscriptions",
      link: "",
    },

    {
      id: 5,
      icon: <MdExplore />,
      title: "Library",
      link: "",
    },

    {
      id: 6,
      icon: <MdExplore />,
      title: "History",
      link: "",
    },
  ];
  return (
    <Fragment>
      <div className='sidebar'>
        <div className='sidebar_menu_list'>
          <MenuList items={menuItems} />
        </div>
      </div>
    </Fragment>
  );
};

export default SidebarMenu;
