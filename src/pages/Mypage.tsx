import NavBar from "../components/NavBar";
import styled from "styled-components";
import {
  Container,
  MyPageContainer,
  ProfileContainer,
  ProfileImage,
  ProfileNameText,
  ProfileIdText,
} from "../styles/mypageStyle";
import Footer from "../components/Footer";
import Tab from "../components/Mypage/tab";
import { useRecoilState } from "recoil";
import { isLoginState, userDataState } from "../utils/atom";
import Login from "../components/Login";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactComponent as LoginImage } from "../assets/svgs/loginImage.svg";
import { colors } from "../styles/colors";

const queryClient = new QueryClient();

const Mypage = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [userData, setUserData] = useRecoilState(userDataState);
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  if (!isLogin) {
    return (
      <div>
        <ContainerNotLogin>
          <NavBar />
          <MyPageContainer>
            <ProfileContainer>
              {/* <ProfileImage></ProfileImage> */}
              <ProfileNameText>이레디</ProfileNameText>
              <ProfileIdText>readyornot</ProfileIdText>
            </ProfileContainer>
            <Tab />
          </MyPageContainer>
          <Footer />
          <LoginMessage>
            <LoginText>로그인을 하셔야 서비스 이용이 가능합니다</LoginText>
            <LoginImage />
            <LoginBtn onClick={handleLoginClick}>로그인하기</LoginBtn>
            {showLogin && (
              <Login
                show={showLogin}
                setShow={setShowLogin}
                onSwitchSignUp={() => {}}
              />
            )}
          </LoginMessage>
        </ContainerNotLogin>
      </div>
    );
  }
  return (
    <Container>
      <NavBar />
      <MyPageContainer>
        <ProfileContainer>
          <ProfileImage src={userData.profileImageUrl}></ProfileImage>
          <ProfileNameText>{userData.name}</ProfileNameText>
          <ProfileIdText>readyornot</ProfileIdText>
        </ProfileContainer>
        <Tab />
      </MyPageContainer>
      <Footer />
    </Container>
  );
};

const ContainerNotLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
`;
const LoginMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 47.5625rem;
  height: 29.3125rem;
  z-index: 100;
  text-align: center;
  gap: 2rem;
`;
const LoginText = styled.div`
  display: flex;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 1.4625rem */
  letter-spacing: -0.01125rem;
`;
const LoginBtn = styled.button`
  display: flex;
  flex-direction: column;
  width: 16.72031rem;
  padding: 0.76875rem 0rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.76875rem;
  background: #000;
  color: ${colors.white};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 1.4625rem */
  letter-spacing: -0.01125rem;
  cursor: pointer;
`;

export default () => (
  <QueryClientProvider client={queryClient}>
    <Mypage />
  </QueryClientProvider>
);
