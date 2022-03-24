import React, { Fragment, useEffect, useState } from "react";
import "./style.css";
import { MdSearch } from "react-icons/md";
import Button from "../../atoms/Buttons";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetVideos } from "../../../redux/actions/videoActions";

const SearchForm = () => {

  const dispath = useDispatch();
  const data = useSelector((state) => state.allVideos);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    const result = await axios.get(
      `http://localhost:4000/api/search?q=${search}`
    );

    dispath(SetVideos(result.data));
  };

  useEffect(() => {
    fetchData();
  }, [search.length > 3]);

  return (
    <Fragment>
      <form className='search_form'>
        <input
          name='search'
          placeholder='Search'
          className='form-control'
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Button variant='danger' icon={<MdSearch />}></Button>
      </form>
    </Fragment>
  );
};

export default SearchForm;
