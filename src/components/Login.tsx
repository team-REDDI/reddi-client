import styled from "styled-components";
import { colors } from "../styles/colors";
import { useEffect, useState } from "react";
import { ReactComponent as ReddiLogo } from "../assets/svgs/ReddiLogo_red.svg";
import { ReactComponent as GoogleLogo } from "../assets/svgs/googleLogo.svg";
import { ReactComponent as CloseIcon } from "../assets/svgs/closeButton.svg";
import { getGoogleAuthURL } from "../apis/loginAPI";
import GoogleAuthCallback from "./Auth/googleAuthCallback";
import { useLoaderData, useLocation } from "react-router-dom";

type LoginProps = {
  show: boolean;
  setShow: (show: boolean) => void;
};
type ShowLoginProps = {
  show: boolean;
};

const handleGoogleLogin = async () => {
  try {
    const data = await getGoogleAuthURL();
    window.location.href = data.url;
    console.log("url:", data.url);
  } catch (error) {
    console.error("Google 로그인 URL을 가져오는데 실패:", error);
  }
};

const Login: React.FC<LoginProps & { onSwitchSignUp: () => void }> = (
  props,
) => {
  const { show, setShow, onSwitchSignUp } = props;

  const closeLogin = () => {
    setShow(false);
  };

  const handleSignUpOpenClick = () => {
    onSwitchSignUp();
  };

  useEffect(() => {}, [props.show]);

  return (
    <LoginContainer show={props.show}>
      <LoginWrapper show={props.show}>
        <CloseButton onClick={closeLogin}>
          <CloseIcon />
        </CloseButton>
        <InfoSection>
          <ReddiLogo />
          <GoogleLoginBtn onClick={handleGoogleLogin}>
            <GoogleLogo />
            구글 계정으로 로그인
          </GoogleLoginBtn>
          <SignUpText>
            아직 회원가입을 하지 않으셨나요?
            <SignupOpen onClick={handleSignUpOpenClick}>
              1초 회원가입하기
            </SignupOpen>
          </SignUpText>
        </InfoSection>
      </LoginWrapper>
    </LoginContainer>
  );
};

const LoginContainer = styled.div<ShowLoginProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  transform: translateY(${(props) => (props.show ? "0%" : "-100%")});
  transition: transform 10.3s ease-in;
  z-index: 200;
`;

const LoginWrapper = styled.div<ShowLoginProps>`
  display: flex;
  width: 47.5625rem;
  height: 29.3125rem;
  gap: 4.69rem;
  background-color: ${colors.white};
  z-index: 99;
  transform: translateY(${(props) => (props.show ? "0%" : "-100%")});
  transition: transform 10.3s ease-in;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.75rem;
  right: 1.63rem;
  background: transparent;
  border: none;
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoogleLoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.38rem;
  border: none;
  width: 20.3125rem;
  height: 2.5rem;
  flex-shrink: 0;
  background-color: ${colors.black_CTA};
  color: ${colors.white};
  font-size: 0.89688rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.0075rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  border-radius: 0.76875rem;
`;
const SignUpText = styled.div`
  color: #9a9a9a;
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.00625rem;
`;
const SignupOpen = styled.div`
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
`;
export default Login;
