import {
  EventButton,
  EventContainer,
  EventContent,
  EventTitle,
  HomeImage,
  ImageContainer,
} from "../../styles/HomeStyle";

const RandomMainBanner = () => {
  const bannerNumber = Math.floor(Math.random() * 2) + 1;
  const bannerSrc = require(`../../assets/images/home_${bannerNumber}.png`);

  return (
    <ImageContainer>
      <HomeImage src={bannerSrc} />
      <EventContainer>
        <EventTitle>
          {bannerNumber === 1 ? (
            "요즘 브랜드는 공간으로 말을 건다"
          ) : (
            <>
              뷰티의 이단아에서 평범한 브랜드가 되기까지,
              <br /> The ordinary의 여정
            </>
          )}
        </EventTitle>
        <EventContent>
          {bannerNumber === 1 ? (
            "브랜드 경험의 정수, 요즘 브랜드의 공간은?"
          ) : (
            <>
              평범해지기가 목표인 브랜드가 있습니다. 새로운 성분, 화려한
              마케팅을 포기했습니다.
              <br />그 대신 성능이 입증된 기존 성분, 투명한 성분비와 패키징으로
              소비자에게 다가갑니다.
            </>
          )}
        </EventContent>
        <EventButton>콘텐츠 보기</EventButton>
      </EventContainer>
    </ImageContainer>
  );
};

export default RandomMainBanner;
