import {
  ShoppingCart,
  LogOut,
} from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

const Navbar = () => {

    const { user } = useSelector((store) => store.auth);
    const { handleLogout } = useAuth();

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur-md">
            <div className="flex h-18 w-full px-8 items-center justify-between">

                <NavLink to={""} className="text-3xl font-black tracking-widest text-white cursor-pointer">
                    TRENDZY
                </NavLink>
                    
                <nav className="flex items-center gap-10 ">
                    <NavLink className={({isActive}) => `
                        text-sm font-medium text-neutral-300 transition hover:text-red-500
                        ${isActive && "text-red-600"}
                    `} to={""}>Home</NavLink>

                    <NavLink className={({isActive}) => `
                        text-sm font-medium text-neutral-300 transition hover:text-red-500
                        ${isActive && "text-red-600"}
                    `} to={"/shop"}>Shop</NavLink>

                    <NavLink className={({isActive}) => `
                        text-sm font-medium text-neutral-300 transition hover:text-red-500
                        ${isActive && "text-red-600"}
                        `} to={"/about"}>About</NavLink>

                    <NavLink className={({isActive}) => `
                        text-sm font-medium text-neutral-300 transition hover:text-red-500
                        ${isActive && "text-red-600"}
                    `} to={"/contact"}>Contact</NavLink>
                </nav>

                <div className="flex items-center gap-3">

                <div className="text-red-400 text-lg flex gap-2">
                    {
                        user && <h1 className="rounded-xl border border-neutral-800 p-2.5 text-neutral-300 transition hover:border-red-500 hover:text-red-500 block">Hey {user.name}</h1>
                    }
                </div>

                {
                    user && 
                    <button  className="cursor-pointer rounded-xl border border-neutral-800 p-2.5 text-neutral-300 transition hover:border-red-500 hover:text-red-500 block">
                        <ShoppingCart />
                    </button>
                }
                {
                    user && 
                    <button onClick={() => handleLogout()} className="cursor-pointer rounded-xl border border-neutral-800 p-2.5 text-neutral-300 transition hover:border-red-500 hover:text-red-500 block">
                        <LogOut />
                    </button>
                }

                </div>
            </div>
        </header>
    );
};

export default Navbar;