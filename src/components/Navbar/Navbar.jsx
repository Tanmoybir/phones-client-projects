import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-2xl bg-slate-200 text-green-700" : "hover:text-slate-100"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/phones"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-2xl bg-slate-200 text-green-700" : "hover:text-slate-100"
                }
            >
                Phones
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-2xl bg-slate-200 text-green-700" : "hover:text-slate-100"
                }
            >
                About
            </NavLink>
        </li>
    </>
    return (
        <div>
            <nav className="flex justify-between items-center">
                <h1>Phone</h1>
                <ul className="flex justify-between items-center gap-5">
                    {navLinks}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;