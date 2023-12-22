import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const { user,logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
    }

    const navLinks = <>
        <li className="">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-2xl px-3 py-1 bg-slate-200 text-green-700" : "text-2xl hover:bg-slate-100 px-3 py-1"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/phones"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-2xl px-3 py-1 bg-slate-200 text-green-700" : "text-2xl hover:bg-slate-100 px-3 py-1"
                }
            >
                Phones
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-2xl px-3 py-1 bg-slate-200 text-green-700" : "text-2xl hover:bg-slate-100 px-3 py-1"
                }
            >
                About
            </NavLink>
        </li>
    </>
    return (
        <div>
            <nav className="flex justify-between items-center relative shadow-lg px-5 py-5">
                <div className="flex items-center gap-5">
                    <div className="lg:hidden" onClick={() => setOpen(!open)}>
                        {open ? <IoMdClose /> : <CiMenuBurger />}
                    </div>
                    <h1>Phone</h1>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex justify-between items-center gap-5">
                        {navLinks}
                    </ul>
                </div>

                {/*  */}

                <div className="dropdown dropdown-end flex items-center">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>

                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    {
                        user ? <>
                            <span>{user.email}</span>
                            <button className="btn btn-ghost" onClick={handleLogout}>Logout</button>
                        </> :
                            <button className="btn btn-ghost"><Link to={'/login'}>Login</Link></button>
                    }

                </div>
            </nav >
            <ul className={`lg:hidden space-y-3 bg-red-200 absolute z-10 px-4 py-2 top-14 left-0 ${open ? "" : "hidden"}`}>
                {navLinks}
            </ul>
        </div >
    );
};

export default Navbar;