import NavBar from "../components/NavBar";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as ArrowIcon } from "../assets/svgs/arrow.svg";
import {
  HomeContainer,
  ImageContainer,
  HomeImage,
  EventContainer,
  EventText,
  EventTitle,
  EventContent,
  EventButton,
  BrandTitleBox,
  HomeTitleWeight,
  HomeTitle,
  BrandTitleRow,
  DateText,
  MarketingTitleBox,
} from "../styles/HomeStyle";

const Home = () => {
  return (
    <HomeContainer>
      <NavBar />
      <ImageContainer>
        <HomeImage src={require("../assets/images/background_home.png")} />
        <EventContainer>
          <EventText>EVENT</EventText>
          <EventTitle>2023이 우리에게 남긴 의미들</EventTitle>
          <EventContent>
            으레 12월이 되면 SNS에는 '올해의 OO'을 뽑아본 사람들의 이야기가
            하나둘 올라옵니다.
            <br /> 올해의 책, 올해의 영화, 올해의 음식, 올해의 여행, 올해의
            장소… 여러분의 한 해는 무슨 의미를 담고 있나요?
            <br /> 힘들고 어려운 순간도 많았을 테지만, 2023년이라는 퍼즐에
            들어갈 조각을 하나둘 골라내는 행위에는
            <br /> 분명 '내가 보낸 시간을 의미 있게 해석하겠다'는 의지와 바람이
            담겨 있는 게 사실입니다.
            <br /> 레디가 선정한, 올해의 브랜드들의 키워드를 살펴보세요.
          </EventContent>
          <EventButton>자세히 보기</EventButton>
        </EventContainer>
      </ImageContainer>

      <BrandTitleBox>
        <BrandTitleRow>
          <HomeTitleWeight>HOT</HomeTitleWeight>
          <HomeTitle>브랜드 순위</HomeTitle>
          <ArrowIcon />
        </BrandTitleRow>
        <DateText>2024. 02</DateText>
      </BrandTitleBox>

      <MarketingTitleBox>
        <BrandTitleRow>
          <HomeTitle>크리스마스에 눈이 온다면?</HomeTitle>
          <HomeTitleWeight>크리스마스 공간 기획</HomeTitleWeight>
          <ArrowIcon />
        </BrandTitleRow>
      </MarketingTitleBox>
    </HomeContainer>
  );
};

export default Home;
