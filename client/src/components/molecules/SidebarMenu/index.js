import React, { Fragment } from "react";

import MenuList from "../../atoms/Lists";
import {
  MdHome,
  MdExplore,
  MdHistory,
  MdVideoLibrary,
  MdSubscriptions,
  MdSmartDisplay,
  MdWatchLater,
  MdThumbUp,
} from "react-icons/md";
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
      link: "/shorts",
    },

    {
      id: 4,
      icon: <MdSubscriptions />,
      title: "Subscriptions",
      link: "/subscriptions",
    },

    {
      id: 5,
      icon: <MdVideoLibrary />,
      title: "Library",
      link: "/library",
    },

    {
      id: 6,
      icon: <MdHistory />,
      title: "History",
      link: "/history",
    },

    {
      id: 7,
      icon: <MdSmartDisplay />,
      title: "Your Videos",
      link: "/your-videos",
    },

    {
      id: 8,
      icon: <MdWatchLater />,
      title: "Watch Later",
      link: "/watch-later",
    },
    {
      id: 9,
      icon: <MdThumbUp />,
      title: "Liked Videos",
      link: "/liked",
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
