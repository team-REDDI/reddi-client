import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <NavigationWrapper>
      <NavSection>
        <div>REDDI</div>

        <StyledNavLink to="/">홈</StyledNavLink>
        <StyledNavLink to="/marketing">마케팅</StyledNavLink>
        <StyledNavLink to="/brand">브랜드</StyledNavLink>
        <StyledNavLink to="/ai-branding">AI 브랜딩</StyledNavLink>
        <StyledNavLink to="/mypage">마이페이지</StyledNavLink>
      </NavSection>
      <NavSection>
        <StyledNavLink to="/search">검색</StyledNavLink>
        <StyledNavLink to="/login">로그인</StyledNavLink>
        <StyledNavLink to="/signup">회원가입</StyledNavLink>
      </NavSection>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0px 4rem;
  background-color: black;
  color: white;
  height: 4.4375rem;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  position: fixed;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  position: relative;

  &.active::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.125rem;
    background-color: white;
    bottom: -0.321rem;
    left: 0;
  }
`;
const NavSection = styled.div`
  display: flex;
  gap: 1.88rem;
`;
export default NavBar;
