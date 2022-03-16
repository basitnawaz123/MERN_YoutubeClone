import React, { Fragment } from "react";
import "./style.css";
import { MdSearch } from "react-icons/md";
import Button from "../../atoms/Buttons";
import InputField from "../../atoms/Inputs";

const SearchForm = () => {
  return (
    <Fragment>
      <form className='search_form'>
        <InputField placeholder='search' />
        <Button variant='danger' icon={<MdSearch />}></Button>
      </form>
    </Fragment>
  );
};

export default SearchForm;
