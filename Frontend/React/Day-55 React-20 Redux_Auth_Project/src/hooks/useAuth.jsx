import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router";

const AuthHook = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  console.log("USer logged in - ", user);

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const handleLogin = (userData) => {
    console.log(userData);
    dispatch(login(userData));
  };

  const handleRegister = (userData) => {};

  return {
    register,
    errors,
    reset,
    handleSubmit,
    handleLogin,
    handleRegister,
    navigate,
  };
};

export default AuthHook;
