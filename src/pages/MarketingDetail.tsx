import styled from "styled-components";
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
} from "../styles/marketingStyle";
import { ReactComponent as ArrowIcon } from "../assets/svgs/arrow.svg";
import {
  BrandTitleRow,
  HomeImage,
  HomeTitle,
  ImageContainer,
} from "../styles/HomeStyle";

const MarketingDetail = () => {
  return (
    <MarketingDetailContainer>
      <ImageContainer>
        <HomeImage src={require("../assets/images/background-marketing.png")} />
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
          <ArrowIcon />
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
        <ArrowIcon />
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
      </ExplBox>
    </MarketingDetailContainer>
  );
};

export default MarketingDetail;
