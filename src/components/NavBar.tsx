import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as ReddiLogo } from "../assets/svgs/ReddiLogo.svg";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
const NavBar = () => {
  const [isSearchBar, setSearchBar] = useState<boolean>(false);

  const toggleSearchBar = () => {
    setSearchBar(!isSearchBar);
  };

  return (
    <>
      <NavigationWrapper>
        <StyledLogo />
        <NavLinks>
          <NavSection>
            <StyledNavLink to="/">홈</StyledNavLink>
            <StyledNavLink to="/marketing">마케팅</StyledNavLink>
            <StyledNavLink to="/brand">브랜드</StyledNavLink>
            <StyledNavLink to="/ai-branding">AI 브랜딩</StyledNavLink>
            <StyledNavLink to="/mypage">마이페이지</StyledNavLink>
          </NavSection>
          <NavSection>
            {/* <UserNavLink to="/search">검색</UserNavLink> */}
            <SearchBarLink onClick={toggleSearchBar}>검색</SearchBarLink>
            <UserNavLink to="/login">로그인</UserNavLink>
            <UserNavLink to="/signup">회원가입</UserNavLink>
          </NavSection>
        </NavLinks>
      </NavigationWrapper>
      {isSearchBar && <SearchBar show={isSearchBar} />}
    </>
  );
};

const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  z-index: 999;
  align-items: center;
  padding-left: 3.94rem;
  padding-right: 4.44rem;
  background-color: black;
  color: white;
  height: 3.125rem;
  font-size: 0.91725rem;
  font-style: normal;
  font-weight: 700;
  position: relative;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
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

const SearchBarLink = styled.div`
  color: white;
  text-decoration: none;
  position: relative;

  cursor: pointer;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const StyledLogo = styled(ReddiLogo)`
  margin-right: 2.44rem;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default NavBar;
