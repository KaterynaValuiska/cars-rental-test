import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { LayoutNav, LinkNav, Main } from "./Layout.styled";

export const Layout = () => {
  return (
    <div>
      <LayoutNav>
        <LinkNav to="/">Home</LinkNav>

        <LinkNav to="/catalog">Catalog</LinkNav>
        <LinkNav to="/favorites">Favorites</LinkNav>
      </LayoutNav>
      <Main>
        <Suspense fallback={<div>loader</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </div>
  );
};

export default Layout;
