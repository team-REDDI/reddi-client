import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as ReddiLogo } from "../assets/svgs/ReddiLogo.svg";
import { useState, useEffect } from "react";
import { SearchBar } from "./Search/SearchBar";
import SignUp from "./SignUp";
import Login from "./Login";
import { colors } from "../styles/colors";
import { accessTokenState, isLoginState, userDataState } from "../utils/atom";
import { useRecoilState } from "recoil";
interface NavigationWrapperProps {
  isTransparent: boolean;
}

const NavBar = () => {
  const [isSearchBar, setSearchBar] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [isLoginUser, setIsLoginUser] = useRecoilState(isLoginState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userData, setUserData] = useRecoilState(userDataState);
  const handleScroll = () => {
    if (window.scrollY > 449) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    // SignUp 컴포넌트를 닫고 Login 컴포넌트 여는 핸들러
    setIsLogin(true);
    setIsSignUp(false);
  };

  const switchToSignUp = () => {
    // Login 컴포넌트를 닫고 Signup 컴포넌트 여는 핸들러
    setIsLogin(false);
    setIsSignUp(true);
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
  const handleLogout = () => {
    setIsLoginUser(false);
    setAccessToken("");
    setUserData({
      userId: 0,
      name: "name",
      email: "email",
      profileImageUrl: "url",
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    localStorage.setItem("isLogin", "false");
    window.location.reload();
  };

  return (
    <>
      <NavigationWrapper isTransparent={isTransparent || isLogin || isSignUp}>
        <Link to="/">
          <StyledLogo />
        </Link>
        <NavLinks>
          <NavSection>
            <StyledNavLink to="/">홈</StyledNavLink>
            <StyledNavLink to="/marketing">마케팅</StyledNavLink>
            <StyledNavLink to="/brand">브랜드</StyledNavLink>
            <StyledNavLink to="/ai-branding">AI 브랜딩</StyledNavLink>
            <StyledNavLink to="/mypage">마이페이지</StyledNavLink>
          </NavSection>
          <NavSection>
            <SearchBarLink onClick={toggleSearchBar} isActive={isSearchBar}>
              검색
            </SearchBarLink>
            {isLoginUser ? (
              <SignUpLink onClick={handleLogout} isActive={false}>
                로그아웃
              </SignUpLink>
            ) : (
              <>
                <SignUpLink onClick={toggleLogin} isActive={isLogin}>
                  로그인
                </SignUpLink>
                <SignUpLink onClick={toggleSignUp} isActive={isSignUp}>
                  회원가입
                </SignUpLink>
              </>
            )}
          </NavSection>
        </NavLinks>
      </NavigationWrapper>
      {isSearchBar && (
        <SearchBar show={isSearchBar} toggleSearchBar={toggleSearchBar} />
      )}
      {isSignUp && (
        <SignUp
          show={isSignUp}
          setShow={setIsSignUp}
          onSwitchLogin={switchToLogin}
        />
      )}
      {isLogin && (
        <Login
          show={isLogin}
          setShow={setIsLogin}
          onSwitchSignUp={switchToSignUp}
        />
      )}
    </>
  );
};

const NavigationWrapper = styled.nav<NavigationWrapperProps>`
  /* 그때 나왔던 얘기: 스크롤 내리면 navbar 투명하게 할지 말지? */
  background-color: ${(props) =>
    props.isTransparent ? "rgba(0,0,0,0.8)" : "black"};
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: row;
  z-index: 999;
  align-items: center;
  padding-left: 3.94rem;
  padding-right: 4.44rem;
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

const SearchBarLink = styled.div<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "#F53B36" : "white")};
  text-decoration: none;
  position: relative;
  cursor: pointer;
`;

const SignUpLink = styled.div<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "#F53B36" : "white")};
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
