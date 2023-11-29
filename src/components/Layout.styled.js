import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
export const LayoutNav = styled.nav`
  display: flex;
  gap: 10px;
  border-bottom: 2px solid grey;
  padding: 20px;
`;
export const LinkNav = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
`;
export const Main = styled.main`
  margin: 20px;
`;
