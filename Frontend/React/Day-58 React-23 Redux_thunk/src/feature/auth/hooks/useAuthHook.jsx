import React from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router';
import { loginAPI } from '../api/authAPI';
import { useDispatch } from "react-redux";
import { login, logout } from '../state/authSlice';
import toast from "react-hot-toast"
import { loginUserAction } from '../state/authAction';

const useAuthHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "all"});

    const handleLogin = async (userData) => {
        try {
            dispatch(loginUserAction(userData)); // ye ek action hai, outer action of thunk isliye dispatch kiya
            reset();
            return navigate("/");
        } catch (err) {
            console.error("Error in login function - ", err);
        }
    };

    const logoutHandler = () => {
        localStorage.removeItem("accessToken");
        dispatch(logout());
        return navigate("/auth/login");
    }

    return {register, handleSubmit, errors, reset, navigate, handleLogin, logoutHandler}
}

export default useAuthHook
