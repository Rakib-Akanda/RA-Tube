import { Link } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";

const NavBar = () => {
  const { user, signOutAccount } = useContext(AuthContext);
  const links = (
    <>
      {!user && (
        <>
          <li className="text-lg font-medium">
            <Link to={"/login"}>Login</Link>
          </li>
          <li className="text-lg font-medium">
            <Link to={"/register"}>Register</Link>
          </li>
        </>
      )}
      {user && (
        <>
          <li className="text-lg font-medium">
            <Link to={"/"}>Home</Link>
          </li>
          <li onClick={signOutAccount} className="text-lg font-medium">
            <button>Sign Out</button>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* dropdown^ */}
          <Link
            to={"/"}
            className="font-bold text-3xl flex items-center gap-2 "
          >
            <BsPlayCircleFill className="text-[#FF1F3D] text-[32px]"></BsPlayCircleFill>
            <span className="text-[#FF1F3D]">RA</span> Tube
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="lg:hidden mr-2">
                <GiHamburgerMenu className="w-5 h-5" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
          </div>
          <Link to={"/profile"} className="lg:px-6">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="border-[#17171733] border-b-2  w-full" />
      </div>
    </div>
  );
};

export default NavBar;
