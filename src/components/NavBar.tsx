import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <NavigationWrapper>
      <NavSection>
        <StyledNavLink to="/">홈</StyledNavLink>
        <StyledNavLink to="/marketing">마케팅</StyledNavLink>
        <StyledNavLink to="/brand">브랜드</StyledNavLink>
        <StyledNavLink to="/ai-branding">AI 브랜딩</StyledNavLink>
        <StyledNavLink to="/mypage">마이페이지</StyledNavLink>
      </NavSection>
      <NavSection>
        <UserNavLink to="/search">검색</UserNavLink>
        <UserNavLink to="/login">로그인</UserNavLink>
        <UserNavLink to="/signup">회원가입</UserNavLink>
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
  padding-left: 10.69rem;
  padding-right: 4.44rem;
  background-color: black;
  color: white;
  height: 3.125rem;
  font-size: 0.91725rem;
  font-style: normal;
  font-weight: 700;
  position: relative;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
`;

const StyledNavLink = styled(NavLink)`
  color: #595959;
  text-decoration: none;
  position: relative;
  &.active {
    color: white;
  }
`;
const UserNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  position: relative;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
export default NavBar;
