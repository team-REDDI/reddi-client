import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ReactComponent as LoginImage } from "../assets/svgs/loginImage.svg";
import { ReactComponent as ReddiLogo } from "../assets/svgs/notLoginLogo.svg";
import { useState } from "react";
import Login from "./Login";
import { colors } from "../styles/colors";
import {
  ReddiAI,
  ReddiAIContainer,
  ReddiAIExp,
  ReddiAIIcon,
  ReddiAILine,
  ReddiAITitle,
  ReddiAITitleBox,
} from "../styles/ReddiAIStyle";

const NotLoginAIBranding = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };
  return (
    <Container>
      <NavBar />
      <ReddiAIContainer2>
        <ReddiAITitleBox>
          <ReddiAILine>
            <ReddiAIIcon />
            <ReddiAI>AI</ReddiAI>
            <ReddiAITitle>로 만드는 나만의 브랜딩</ReddiAITitle>
          </ReddiAILine>
          <ReddiAIExp>
            AI와 함께하는 쉽고 편리한 브랜딩을 경험해보세요
          </ReddiAIExp>
        </ReddiAITitleBox>
      </ReddiAIContainer2>
      <Footer />

      <ContainerNotLogin>
        <LoginMessage>
          <ReddiLogo />
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 3.125rem; */
`;

const ContainerNotLogin = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* z-index: 100; */
  background-color: rgba(0, 0, 0, 0.7);
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
const LoginBtn = styled.div`
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
const ReddiAIContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 64rem;
  height: 30rem;
`;
export default NotLoginAIBranding;
