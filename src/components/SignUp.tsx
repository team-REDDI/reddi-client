import styled from "styled-components";
import { colors } from "../styles/colors";
import { useEffect, useState } from "react";
import React from "react";
import { ReactComponent as SignUpPeople1 } from "../assets/svgs/signupPeopleImage.svg";
import { ReactComponent as SignUpPeople2 } from "../assets/svgs/signupPeopleImage2.svg";
import { ReactComponent as SignUpPeople3 } from "../assets/svgs/signupPeopleImage3.svg";
import { ReactComponent as LeftSlider } from "../assets/svgs/leftSlider.svg";
import { ReactComponent as RightSlider } from "../assets/svgs/rightSlider.svg";
import { ReactComponent as GoogleLogo } from "../assets/svgs/googleLogo.svg";
import { ReactComponent as CloseIcon } from "../assets/svgs/closeButton.svg";
import { ReactComponent as RLogoIcon } from "../assets/svgs/RIcon.svg";

type SignUpProps = {
  show: boolean;
  setShow: (show: boolean) => void;
};

type ShowSignUpProps = {
  show: boolean;
};

const SignUp: React.FC<SignUpProps & { onSwitchLogin: () => void }> = (
  props,
) => {
  const { show, setShow, onSwitchLogin } = props;

  const closeSignUp = () => {
    setShow(false);
  };

  const handleLoginOpenClick = () => {
    onSwitchLogin();
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideData = [
    {
      image: SignUpPeople1,
      bigText: "수많은 브랜딩 레퍼런스 중 내게 딱 맞는 건?",
      smallText:
        "레디는 당신에게 딱 맞는 레퍼런스와 AI를 통한 브랜딩까지 제안합니다.",
    },
    {
      image: SignUpPeople2,
      bigText: "브랜드의 여정을 기록하다",
      smallText: "레디는 브랜드의 시작과 지금,미래까지의 과정을 기록합니다.",
    },
    {
      image: SignUpPeople3,
      bigText: "브랜드의 성장을 돕다",
      smallText:
        "레디는 아카이빙을 넘어, AI를 통해 브랜드의 핵심과 미래에 대한 영감을 제공합니다.",
    },
  ];
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideData.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slideData.length) % slideData.length,
    );
  };

  useEffect(() => {}, [props.show]);

  return (
    <>
      <SignUpContainer show={props.show}>
        <SignUpWrapper show={props.show}>
          <FixedRLogoIcon />
          <CloseButton onClick={closeSignUp}>
            <CloseIcon />
          </CloseButton>
          <InfoSection1>
            {React.createElement(slideData[currentSlide].image)}
            <InfoBigText>{slideData[currentSlide].bigText}</InfoBigText>
            <InfoSmallText>{slideData[currentSlide].smallText}</InfoSmallText>
            <Sliders>
              <LeftSliderIcon onClick={goToPreviousSlide} />
              <Dots>
                {slideData.map((_, index) => (
                  <Dot
                    key={index}
                    isSelected={currentSlide === index}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </Dots>
              <RightSliderIcon onClick={goToNextSlide} />
            </Sliders>
          </InfoSection1>
          <InfoSection2>
            <SignUpBigText>1초만에 레디 시작하기</SignUpBigText>
            <SignUpSmallText>
              아이디, 비밀번호, 이름, 휴대번호를 입력하지 않고도 간편하게 시작할
              수 있어요!
            </SignUpSmallText>
            <GoogleSignBtn>
              <GoogleLogo />
              구글 계정으로 시작하기
            </GoogleSignBtn>
            <LoginText>
              이미 회원가입하셨나요?{" "}
              <LoginOpen onClick={handleLoginOpenClick}>
                간편 로그인하기
              </LoginOpen>
            </LoginText>
          </InfoSection2>
        </SignUpWrapper>
      </SignUpContainer>
    </>
  );
};

const SignUpContainer = styled.div<ShowSignUpProps>`
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

const SignUpWrapper = styled.div<ShowSignUpProps>`
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
const FixedRLogoIcon = styled(RLogoIcon)`
  position: absolute;
  top: 3.62rem;
  left: 2.94rem;
`;
const InfoSection1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoBigText = styled.div`
  width: 15.3125rem;
  height: fit-content;
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
  width: 16.375rem;
  height: 2.5rem;
  color: var(--gray-text, var(--gray, #595959));
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const Sliders = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 1.56rem;
  margin-top: 1.13rem;
  bottom: 3.94rem;
  left: 7.91rem;
`;
const LeftSliderIcon = styled(LeftSlider)`
  cursor: pointer;
`;
const RightSliderIcon = styled(RightSlider)`
  cursor: pointer;
`;

const Dots = styled.div`
  display: flex;
  gap: 0.56rem;
`;

const Dot = styled.div<{ isSelected: boolean }>`
  width: 0.4375rem;
  height: 0.4375rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: ${(props) => (props.isSelected ? "#ccc" : "white")};
  display: inline-block;

  cursor: pointer;
`;

const InfoSection2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  width: 100%;
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.00625rem;
`;
const LoginOpen = styled.div`
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
`;
export default SignUp;
