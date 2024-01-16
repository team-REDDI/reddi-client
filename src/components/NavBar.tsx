import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as ReddiLogo } from "../assets/svgs/ReddiLogo.svg";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import SignUp from "./SignUp";
import Login from "./Login";
const NavBar = () => {
  const [isSearchBar, setSearchBar] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const toggleSearchBar = () => {
    setSearchBar(!isSearchBar);
    if (isLogin) {
      setIsLogin(false);
    }
    if (isSignUp) {
      setIsSignUp(false);
    }
  };
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    if (isLogin) {
      setIsLogin(false);
    }
    if (isSearchBar) {
      setSearchBar(false);
    }
  };

  const switchToLogin = () => {
    // SignUp 컴포넌트를 닫고 Login 컴포넌트를 여는 함수
    setIsLogin(true);
    setIsSignUp(false);
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
    if (isSignUp) {
      setIsSignUp(false);
    }
    if (isSearchBar) {
      setSearchBar(false);
    }
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
            <SearchBarLink onClick={toggleSearchBar}>검색</SearchBarLink>
            <SignUpLink onClick={toggleLogin}>로그인</SignUpLink>
            <SignUpLink onClick={toggleSignUp}>회원가입</SignUpLink>
          </NavSection>
        </NavLinks>
      </NavigationWrapper>
      {isSearchBar && <SearchBar show={isSearchBar} />}
      {isSignUp && (
        <SignUp
          show={isSignUp}
          setShow={setIsSignUp}
          onSwitchLogin={switchToLogin}
        />
      )}
      {isLogin && <Login show={isLogin} setShow={setIsLogin} />}
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

const SignUpLink = styled.div`
  color: white;
  text-decoration: none;
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
