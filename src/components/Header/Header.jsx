import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    // const links = <>
    //     <li><NavLink to={'/'}>Home</NavLink></li>
    //     <li><NavLink to={'/listed-book'}>Listed Books</NavLink></li>
    //     <li><NavLink to={'/read-pages'}>Pages to Read</NavLink></li>
    // </>

    return (
        <div className="py-5">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/listed-book'}>Listed Books</NavLink></li>
        <li><NavLink to={'/read-pages'}>Pages to Read</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Book Review</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/listed-book'}>Listed Books</NavLink></li>
        <li><NavLink to={'/read-pages'}>Pages to Read</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="bg-[#23BE0A] mr-5 px-4 py-2 rounded-lg hover:bg-white">Sign in</button>
    <button className="bg-[#59C6D2] hover:bg-white px-4 py-2 rounded-lg">Sign up</button>
  </div>
</div>
        </div>
    );
};

export default Header;