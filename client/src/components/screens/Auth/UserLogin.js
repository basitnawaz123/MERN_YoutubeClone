import React, { Fragment, useState } from "react";
import "./style.css";
import Label from "../../atoms/Label";
import Input from "../../atoms/Inputs";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SignIn, signUp } from "../../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(true);
  const [showReg, setShowReg] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/auth/register", user)
      .then((res) => {
        if (res.status === 200) {
          alert(res.data);
          setUser({ name: "", email: "", password: "" });
          setShowLogin(true);
          setShowReg(false);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/auth", user)
      .then((token) => {
        dispatch(SignIn(token.data));
        navigate("/upload");
      })
      .catch((error) => {
        setValidationError(JSON.stringify(error.response.data));
      });
  };

  return (
    <Fragment>
      <div className='auth_container'>
        <div className='form_tab'>
          <Label variant='label-danger' text={validationError} />
          <div className='tabs'>
            <button
              className={showLogin ? "active" : ""}
              onClick={(e) => {
                setShowLogin(true);
                setShowReg(false);
              }}>
              Login
            </button>
            <button
              className={showReg ? "active" : ""}
              onClick={(e) => {
                setShowLogin(false);
                setShowReg(true);
              }}>
              Register
            </button>
          </div>
          <div className={`tab_content ${showLogin ? "" : "d-none"}`}>
            <form onSubmit={handleLogin}>
              <Label variant='label' text='Login' />
              <input
                className='form-control'
                type='email'
                placeholder='someone@example.com'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />

              <input
                className='form-control'
                type='password'
                placeholder='password'
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />

              <button type='submit' className='btn red'>
                Login
              </button>
            </form>
          </div>

          <div className={`tab_content ${showReg ? "" : "d-none"}`}>
            <form onSubmit={handleRegister}>
              <Label variant='label' text='Register' />
              <Label variant='label-danger' text={validationError} />
              <input
                className='form-control'
                type='text'
                id='name'
                placeholder='Full Name'
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />

              <input
                className='form-control'
                type='email'
                id='email'
                placeholder='someone@example.ccom'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />

              <input
                className='form-control'
                type='password'
                id='password'
                placeholder='Password'
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <button type='submit' className='btn red'>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserLogin;
