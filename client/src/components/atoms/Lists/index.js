import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const MenuList = (props) => {
  let { items } = props;
  return (
    <Fragment>
      {items.map((item) => {
        return (
          <NavLink
            to={item.link}
            key={item.id}
            className={(navData) => (navData.isActive ? "active" : "link")}>
            <div className='menu_link'>
              <i className='menu_icon'>{item.icon}</i>
              <span>{item.title}</span>
            </div>
          </NavLink>
        );
      })}
    </Fragment>
  );
};

export default MenuList;
