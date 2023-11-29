import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <div className="Layout">
      <nav className="LayoutNav">
        <NavLink to="/" className="NavLink">
          Home
        </NavLink>

        <NavLink to="/catalog" className="NavLink">
          Catalog
        </NavLink>
        <NavLink to="/favorites" className="NavLink">
          favorites
        </NavLink>
      </nav>
      <main>
        <Suspense fallback={<div>loader</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
