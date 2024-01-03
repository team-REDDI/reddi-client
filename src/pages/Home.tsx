import NavBar from "../components/NavBar";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as ArrowIcon } from "../assets/svgs/arrow.svg";

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
          <BrandTitle1>HOT</BrandTitle1>
          <BrandTitle2>브랜드 순위</BrandTitle2>
          <ArrowIcon />
        </BrandTitleRow>
        <DateText>2024. 02</DateText>
      </BrandTitleBox>

      <MarketingTitleBox>
        <BrandTitleRow>
          <BrandTitle2>크리스마스에 눈이 온다면?</BrandTitle2>
          <BrandTitle1>크리스마스 공간 기획</BrandTitle1>
          <ArrowIcon />
        </BrandTitleRow>
      </MarketingTitleBox>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 49.5625rem;
`;

const HomeImage = styled.img`
  position: absolute;
  width: 100%;
  height: 49.5rem;
  position: absolute;
  top: 4.4rem;
`;

const EventContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 11.12rem 0 0 18.75rem;
  gap: 1.5rem;
`;

const EventText = styled.span`
  color: ${colors.white};
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

const EventTitle = styled.span`
  color: ${colors.white};
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 800;
  line-height: 6rem;
`;

const EventContent = styled.div`
  color: ${colors.white};
  width: 42.1rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.55rem;
`;

const EventButton = styled.div`
  color: ${colors.white};
  font-size: 0.95rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4rem;
  margin-top: 0.1rem;
  border-bottom: 1px solid currentColor; /* 밑줄처럼 보이게 함 */
  padding-bottom: 0.001rem;
  /* text-decoration: underline; */
`;

const BrandTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25.68rem;
  height: 4.1rem;
  margin: 7.12rem 0 0 18.75rem;
`;

const BrandTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  height: 4.1rem;
`;

const BrandTitle1 = styled.div`
  color: ${colors.black};
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 130%;
  width: fit-content;
  margin-right: 0.5rem;
`;

const BrandTitle2 = styled.div`
  color: ${colors.black};
  font-size: 3.125rem;
  font-weight: 400;
  line-height: 130%;
  width: fit-content;
  margin-right: 1.25rem;
`;

const DateText = styled.span`
  color: ${colors.grey_500};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.0125rem;
`;

const MarketingTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 65rem;
  height: 4.1rem;
  margin: 7.12rem 0 0 18.75rem;
`;
