import React, { Fragment } from "react";

import "./style.css";
import {
  MdMenu,
  MdNotifications,
  MdVideocam,
  MdApps,
  MdAccountCircle,
} from "react-icons/md";
import SearchForm from "../../molecules/Forms/SearchForm";

const Navigation = () => {
  return (
    <Fragment>
      <div className='header'>
        <div className='header_left'>
          <i>
            <MdMenu />
          </i>
          <img
            src='https://www.seekpng.com/png/detail/77-772362_youtube-logo-youtube-logo-png.png'
            alt='logo'
          />
        </div>

        <div className='header_search'>
          <SearchForm />
        </div>

        <div className='header_right'>
          <i>
            <MdVideocam />
          </i>
          <i>
            <MdApps />
          </i>
          <i>
            <MdNotifications />
          </i>
          <i>
            <MdAccountCircle />
          </i>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
