import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

const AuthProtection = () => {
  const { user } = useSelector((store) => store.auth);
  console.log(user, "Auth")

  useEffect(() => {
    if(user){
      toast.error("You already have account, Logout first"); // this is the sideeffect which was causing error
    }
  }, []);

  if(user){
    return <Navigate to={"/"} replace />
  }

  return <Outlet />
}

export default AuthProtection
