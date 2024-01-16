import styled from "styled-components";
import { colors } from "../styles/colors";
import { useEffect, useState } from "react";
import { ReactComponent as SignUpPeople } from "../assets/svgs/signupPeopleImage.svg";
import { ReactComponent as GoogleLogo } from "../assets/svgs/googleLogo.svg";

type SignUpProps = {
  show: boolean;
};

const SignUp: React.FC<SignUpProps> = (props) => {
  useEffect(() => {}, [props.show]);

  return (
    <SignUpContainer show={props.show}>
      <SignUpWrapper show={props.show}>
        <InfoSection>
          <SignUpPeople />
          <InfoBigText>수많은 브랜딩 레퍼런스 중 내게 딱 맞는 건? </InfoBigText>
          <InfoSmallText>
            레디는 당신에게 딱 맞는 레퍼런스와 AI를 통한 브랜딩까지 제안합니다.
          </InfoSmallText>
        </InfoSection>
        <InfoSection>
          <SignUpBigText>1초만에 레디 시작하기</SignUpBigText>
          <SignUpSmallText>
            아이디, 비밀번호, 이름, 휴대번호를 입력하지 않고도 간편하게 시작할
            수 있어요!
          </SignUpSmallText>
          <GoogleSignBtn>
            <GoogleLogo />
            구글 계정으로 시작하기
          </GoogleSignBtn>
          <LoginText>이미 회원가입하셨나요? 간편 로그인하기</LoginText>
        </InfoSection>
      </SignUpWrapper>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div<SignUpProps>`
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
`;

const SignUpWrapper = styled.div<SignUpProps>`
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
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const InfoBigText = styled.div`
  width: 15.3125rem;
  height: 3.875rem;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
  margin-top: 1.92rem;
  margin-bottom: 0.25rem;
`;
const InfoSmallText = styled.div`
  width: 13.125rem;
  height: 2.5rem;
  color: var(--gray-text, var(--gray, #595959));
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const SignUpBigText = styled.div`
  width: 15.0625rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01125rem;
  text-align: start;
  color: ${colors.black_CTA};
  margin-bottom: 0.5rem;
`;
const SignUpSmallText = styled.div`
  width: 15.0625rem;
  color: var(--gray-text, var(--gray, #595959));
  text-align: start;
  font-family: SUIT;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.0075rem;
`;
const GoogleSignBtn = styled.button`
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
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.0075rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;
const LoginText = styled.div`
  color: #ccc;
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.00625rem;
`;
export default SignUp;
