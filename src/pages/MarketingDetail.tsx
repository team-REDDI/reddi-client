import {
  IntroBox,
  FilterTag,
  MarketingDetailContainer,
  ExplBox,
  BrandImage,
  MarketingExplain,
  TagBox,
  MarketingTitle,
  DataTable,
  DataColumn,
  DataType,
  DataText,
  GoBackButton,
  ImageContainer,
  MarketingTags,
} from "../styles/marketingStyle";
import { ReactComponent as ArrowIcon } from "../assets/svgs/arrow.svg";
import { BrandTitleRow, HomeImage, HomeTitle } from "../styles/HomeStyle";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

const MarketingDetail = () => {
  const nav = useNavigate();

  const goBack = () => {
    nav(-1);
  };
  return (
    <MarketingDetailContainer>
      <ImageContainer>
        <HomeImage src={require("../assets/images/background-marketing.png")} />
        <GoBackButton onClick={goBack}>뒤로가기</GoBackButton>
        <IntroBox>
          <TagBox>
            <FilterTag>뷰티</FilterTag>
            <FilterTag>팝업스토어</FilterTag>
            <FilterTag>콘텐츠마케팅</FilterTag>
          </TagBox>
          <MarketingTitle>
            탬버린즈 <br /> “solace: 한 줌의 위안”
          </MarketingTitle>
          <DataTable>
            <DataColumn>
              <DataType>작성자</DataType>
              <DataText>송채영</DataText>
            </DataColumn>
            <DataColumn>
              <DataType>읽음</DataType>
              <DataText>486</DataText>
            </DataColumn>
            <DataColumn>
              <DataType>작성일자</DataType>
              <DataText>2023.12.31</DataText>
            </DataColumn>
          </DataTable>
        </IntroBox>
      </ImageContainer>

      <ExplBox>
        <BrandTitleRow>
          <HomeTitle>기획 의도 및 프로그램 소개</HomeTitle>
        </BrandTitleRow>
        <BrandImage src={require("../assets/images/temburins.png")} />
        <MarketingExplain>
          핸드크림으로 유명했던 탬버린즈(Tamburins)가 향수로 영역을 확대하면서
          브랜드 인지도를 쌓아가고 있습니다. 이 과정에서 패션・뷰티 선두
          아이콘인 블랙핑크 제니가 함께하면서 2030세대 젊은층을 대상으로 핫한
          이슈가 되었습니다.
          <br />
          향수 상품을 확장하면서 탬버린즈는 {"<solace: 한 줌의 위안>"}이라는
          캠페인 주제로 향수 팝업 전시회를 진행했습니다. 일반적인 방식의 틀에서
          향수를 보여주는 것이 아니라, 새로운 향수 세계관을 확장하면서 복합 문화
          공간에서 향과 공간 예술이 결합된 형태로 전시회를 구성했습니다. 이번
          전시는 위안과 함께 공존하는 다양한 감정들을 오롯이 공간에 표현하고자
          했으며 아트 인스톨레이션을 1-2층을 거쳐 전시해두면서 탬버린즈의
          정신성, 정체성을 나타내고 캠페인의 네러티브를 상상하게 만들었습니다.
        </MarketingExplain>
        <BrandImage src={require("../assets/images/temburins_2.png")} />
        <MarketingExplain>
          전시회에서는 10종의 향수 컬렉션을 공개하고 해당 향수 컬렉션은 위안에서
          오는 다양한 감정을 표현함과 동시에 시간의 흐름에 따라 다채로운 향의
          변화를 온전히 느낄 수 있는 향수로 구성되었습니다. 전시장에서는 캠페인
          아트 필름과 아트 인스톨레이션을 감상할 수 있게해 소비자에게 이색적인
          경험을 선사함에 더해 향수 컬렉션의 시향 서비스를 제공해 제품에 대한
          경험 마케팅을 소비자 대상으로 진행하고자 했습니다. 또한, 아트
          인스톨레이션의 모형을 형상화한 캔들을 팝업 전시회에서만 구매 가능한
          상품으로 내세우면서 소비자의 방문을 유도하고자 했습니다.
        </MarketingExplain>
      </ExplBox>
      <MarketingTags>
        <FilterTag>뷰티</FilterTag>
        <FilterTag>팝업스토어</FilterTag>
        <FilterTag>콘텐츠마케팅</FilterTag>
      </MarketingTags>
      <Footer />
    </MarketingDetailContainer>
  );
};

export default MarketingDetail;
