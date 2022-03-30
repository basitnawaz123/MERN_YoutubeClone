import React, { Fragment } from "react";

import "./style.css";
import {
  MdMenu,
  MdNotifications,
  MdVideocam,
  MdApps,
  MdAccountCircle,
  MdLogout,
} from "react-icons/md";
import SearchForm from "../../molecules/Forms/SearchForm";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/actions/authActions";

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <Fragment>
      <div className='header'>
        <div className='header_left'>
          <i>
            <MdMenu />
          </i>
          <Link to='/'>
            <img
              src='https://www.seekpng.com/png/detail/77-772362_youtube-logo-youtube-logo-png.png'
              alt='logo'
            />
          </Link>
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

          {!auth.isLoggedIn ? (
            <i>
              <Link to='/login'>
                <MdAccountCircle />
              </Link>
            </i>
          ) : (
            <i>
              <MdLogout onClick={handleLogOut} />
            </i>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
