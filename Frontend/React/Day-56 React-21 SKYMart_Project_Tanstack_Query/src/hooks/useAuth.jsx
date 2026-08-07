import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/authSlice";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const useAuth = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((store) => store.auth);
  const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || []);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const handleLogin = (userData) => {
    const user = registeredUsers.find((u) => {
      return u.email === userData.email && u.password === userData.password;
    });

    if(!user){
      toast.error("Email or Password is incorrect");
      reset();
      return;
    }

    dispatch(login(user));
    localStorage.setItem("user", JSON.stringify(user));
    reset();
    toast.success("User Logged IN");
    return navigate("/");
  };

  const handleLogout = () => {
    toast.success("Logged Out");
    dispatch(logout());
  }

  const handleRegister = (userData) => {
    const isUserExists = registeredUsers.find((u) => {
      return u.email === userData.email;
    });

    if(isUserExists){
      toast.error("An Account with this email already exists! Please Login");
      reset();
      return;
    }

    const user = [...registeredUsers, userData];
    setRegisteredUsers(user);
    localStorage.setItem("registeredUsers", JSON.stringify(user));
    return navigate("/auth/login");
  };

  return {
    register,
    errors,
    reset,
    handleSubmit,
    handleLogin,
    handleRegister,
    navigate,
    handleLogout
  };
};

export default useAuth;
