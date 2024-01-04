import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Filter from "../components/Filter";
import { ReactComponent as ArrowIcon } from "../assets/svgs/arrow.svg";
import {
  Blank,
  BrandTitleRow,
  HomeTitleWeight,
  MarketingLine,
} from "../styles/HomeStyle";
import { MarketingBox } from "../components/MarketingBox";

const dropdownDataMarketing = {
  industry: [
    { name: "뷰티", value: "뷰티" },
    { name: "금융", value: "금융" },
    { name: "F&B", value: "F&B" },
    { name: "IT", value: "IT" },
  ],
  marketing: [
    { name: "팝업스토어", value: "팝업스토어" },
    { name: "콘텐츠 마케팅", value: "콘텐츠 마케팅" },
  ],
  target: [
    { name: "10대", value: "10대" },
    { name: "20대", value: "20대" },
    { name: "30대", value: "30대" },
  ],
  sort: [
    { name: "인기순", value: "인기순" },
    { name: "추천순", value: "추천순" },
  ],
};
const Marketing = () => {
  return (
    <MarketingPageContainer>
      <NavBar />
      <Header title="마케팅" />
      <Filter dropdownItems={dropdownDataMarketing} />
      <ReferenceBox>
        <BrandTitleRow>
          <HomeTitleWeight>마케팅 레퍼런스</HomeTitleWeight>
          <ArrowIcon />
        </BrandTitleRow>
        <MarketingLine>
          <MarketingBox
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
            expl="유럽 어느 골목을 들어와있는 듯한 착각"
            read={727}
          />
          <MarketingBox
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="신세계 백화점의 
          ‘MAGIC WINTER FANTASY’"
            expl="3분을 위한 9개월의 여정"
            read={1928}
          />
          <MarketingBox
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="시몬스테라스의 ‘크리스마스 일루미네이션"
            expl="동화 속 마을로 단장한 시몬스"
            read={567}
          />
        </MarketingLine>
        <MarketingLine>
          <MarketingBox
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
            expl="유럽 어느 골목을 들어와있는 듯한 착각"
            read={727}
          />
          <MarketingBox
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="신세계 백화점의 
          ‘MAGIC WINTER FANTASY’"
            expl="3분을 위한 9개월의 여정"
            read={1928}
          />
          <MarketingBox
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="시몬스테라스의 ‘크리스마스 일루미네이션"
            expl="동화 속 마을로 단장한 시몬스"
            read={567}
          />
        </MarketingLine>
        <MarketingLine>
          <MarketingBox
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
            expl="유럽 어느 골목을 들어와있는 듯한 착각"
            read={727}
          />
          <MarketingBox
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="신세계 백화점의 
          ‘MAGIC WINTER FANTASY’"
            expl="3분을 위한 9개월의 여정"
            read={1928}
          />
          <MarketingBox
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="시몬스테라스의 ‘크리스마스 일루미네이션"
            expl="동화 속 마을로 단장한 시몬스"
            read={567}
          />
        </MarketingLine>
        <MarketingLine>
          <MarketingBox
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
            expl="유럽 어느 골목을 들어와있는 듯한 착각"
            read={727}
          />
          <MarketingBox
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="신세계 백화점의 
          ‘MAGIC WINTER FANTASY’"
            expl="3분을 위한 9개월의 여정"
            read={1928}
          />
          <MarketingBox
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="시몬스테라스의 ‘크리스마스 일루미네이션"
            expl="동화 속 마을로 단장한 시몬스"
            read={567}
          />
        </MarketingLine>
        <Blank />
      </ReferenceBox>
    </MarketingPageContainer>
  );
};

const MarketingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReferenceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 82.3rem;
  margin-top: 10.6rem;
`;

export default Marketing;
