import React, { Fragment, useEffect, useState } from "react";
import "./style.css";
import { MdSearch } from "react-icons/md";
import Button from "../../atoms/Buttons";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [data, setData] = useState([{}]);
  const [search, setSearch] = useState("");
  const [isAppear, SetIsAppear] = useState(false);
  const fetchData = async () => {
    const result = await axios.get(
      `http://localhost:4000/api/search?q=${search}`
    );
    setData({ data: result.data });

    // console.log("search:::::::::::", data);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  // console.log(data.data);

  return (
    <Fragment>
      <form className='search_form'>
        <input
          name='search'
          placeholder='Search'
          className='form-control'
          onChange={(e) => {
            setSearch(e.target.value);
            SetIsAppear(true);
          }}
        />
        <Button variant='danger' icon={<MdSearch />}></Button>
      </form>
      {isAppear ? (
        <div className='search_result'>
          <ul>
            {data.data &&
              data.data.map((item) => {
                return (
                  <li key={item._id}>
                    <Link
                      onClick={(e) => SetIsAppear(false)}
                      to={`/video/${item._id}`}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default SearchForm;
