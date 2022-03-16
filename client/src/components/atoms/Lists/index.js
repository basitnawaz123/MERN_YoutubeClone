import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const MenuList = (props) => {
  let { items } = props;
  return (
    <Fragment>
      {items.map((item) => {
        return (
          <Link to={item.link} key={item.id}>
            <div className='menu_link'>
              <i className='menu_icon'>{item.icon}</i>
              <span>{item.title}</span>
            </div>
          </Link>
        );
      })}
    </Fragment>
  );
};

export default MenuList;
