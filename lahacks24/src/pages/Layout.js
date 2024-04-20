import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Camera">Camera</Link>
          </li>
          <li>
            <Link to="/View">Fridge</Link>
          </li>
          <li>
            <Link to="/Recipes">Recipes</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;