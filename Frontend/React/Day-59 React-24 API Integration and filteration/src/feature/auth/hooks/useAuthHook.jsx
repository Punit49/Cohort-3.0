import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import { loginUserAction } from '../state/authAction';

const useAuthHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {register, formState:{errors}, handleSubmit, reset} = useForm({mode: 'all'});

    const handleLogin = async (userData) => {
        try {
            dispatch(loginUserAction(userData));
            reset();
            return navigate("/");
        } catch (error) {
            console.error("Error in login handler - ", error);
        }
    }

    return { register, errors, handleSubmit, reset, handleLogin };
}

export default useAuthHook;
