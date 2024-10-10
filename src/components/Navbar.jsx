import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className=" flex items-center justify-between py-4 px-2 md:p-4">
        <Link
          to="/"
          className="text-sm w-full md:text-2xl font-semibold text-white uppercase"
        >
          Strength Quest
        </Link>

        <div className="block w-full" id="navbar-default">
          <ul className=" font-medium flex p-0  gap-x-5 md:gap-x-8 mt-0 justify-end ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block text-xs  md:text-base p-0 hover:underline duration-300 ${
                    isActive ? "text-orange-400" : "text-white"
                  }`
                }
              >
                Add Record
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/records"
                className={({ isActive }) =>
                  `block text-xs uppercase md:text-base p-0 hover:underline duration-300 ${
                    isActive ? "text-orange-400" : "text-white"
                  }`
                }
              >
                View Records
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
