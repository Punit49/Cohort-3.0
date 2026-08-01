import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MeraStore } from "../context/AppContext";

export const useAuth = () => {
    const navigate = useNavigate();
    const { handleSubmit, reset, register, formState: {errors}} = useForm({
        mode: "onTouched"
    });

    const {registeredUsers, setRegisteredUsers, user, setUser} = useContext(MeraStore);
    
    const handleLogin = (data) => {
        const isUser = registeredUsers.find((u) => {
            return u.email === data.email && u.password === data.password;
        });
        if(!isUser) {
            return alert("Tera email ya password galat hai bete");
        }
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        reset();
        return navigate("/main");
    }

      const handleSignUp = (data) => {
        const isUser = registeredUsers.find((u) => u.email === data.email);
        if(isUser) {
        alert("Tere pass pehle se ek account hai, login karle fatafat..");
        return navigate("/");
        }
        const updatedUsers = [...registeredUsers, data];
        setRegisteredUsers(updatedUsers);
        localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
        alert("Account ban gaya tera, login karle ab..");
        reset();
        return navigate("/");
    }

    return  {
        handleSubmit, reset, register, errors, handleLogin, registeredUsers, setRegisteredUsers, user, setUser, handleSignUp
    }
}
