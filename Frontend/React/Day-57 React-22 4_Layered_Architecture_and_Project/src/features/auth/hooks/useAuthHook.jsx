import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginAPI } from "../api/authApi";
import { useDispatch } from "react-redux";
import { login } from "../state/authSlice";
import toast from "react-hot-toast";

const useAuthHook = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { register, reset, formState: {errors}, handleSubmit } = useForm({
        mode: "onTouched"
    });
 
    const handleLogin = async (formData) => {
        try{
            const data = await loginAPI(formData);
            dispatch(login(data));
            reset();
            toast.success("Logged in Succesfully");
            return navigate("/");
        } catch(error){
            console.error("Error in login form - ", error);
        }
    }

    const handleRegister = (formData) => {
        console.log(formData);
    }

    return { 
        navigate, register, errors, handleSubmit, handleLogin, handleRegister
    }
}

export default useAuthHook
