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
            <Link to="/Fridge">Fridge</Link>
          </li>
          <li>
            <Link to="/Extra">Extra</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;