import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Filter from "../components/Filter";
import { BrandTitleRow, HomeTitle, MarketingLine } from "../styles/HomeStyle";
import { MarketingBox } from "../components/MarketingBox";
import dropdownDataMarketing from "../assets/datas/dropDownDataMarketing.json";
import { Footer } from "../components/Footer";

const dummyMarketingBoxes = [
  {
    imgSrc: "../assets/images/exemple.png",
    type: "PLACE",
    title: "더 현대를 밝히는 ‘해리의 꿈의 상점’",
    expl: "유럽 어느 골목을 들어와있는 듯한 착각",
    read: 727,
  },
  {
    imgSrc: "../assets/images/exemple.png",
    type: "PLACE",
    title: "신세계 백화점의 ‘MAGIC WINTER FANTASY’",
    expl: "3분을 위한 9개월의 여정",
    read: 567,
  },
  {
    imgSrc: "../assets/images/exemple.png",
    type: "PLACE",
    title: "시몬스테라스의 ‘크리스마스 일루미네이션",
    expl: "동화 속 마을로 단장한 시몬스",
    read: 1218,
  },
  {
    imgSrc: "../assets/images/exemple.png",
    type: "PLACE",
    title: "시몬스테라스의 ‘크리스마스 일루미네이션",
    expl: "동화 속 마을로 단장한 시몬스",
    read: 1218,
  },
];

const Marketing = () => {
  return (
    <MarketingPageContainer>
      <NavBar />
      <Header
        title="마케팅"
        subtitle="마케팅 레퍼런스들을 보여주는 페이지입니다. (짧은 페이지 설명)"
      />
      <Filter dropdownItems={dropdownDataMarketing} />
      <ReferenceBox>
        <BrandTitleRow>
          <HomeTitle>마케팅 레퍼런스</HomeTitle>
        </BrandTitleRow>
        <MarketingLines>
          {dummyMarketingBoxes.map((box, index) => (
            <MarketingBox
              key={index}
              imgSrc={box.imgSrc}
              type={box.type}
              title={box.title}
              expl={box.expl}
              read={box.read}
            />
          ))}
        </MarketingLines>
      </ReferenceBox>
      <Footer />
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
  align-items: center;
  width: 64rem;
  box-sizing: border-box;
  padding-left: 10.69rem;
  padding-right: 10.69rem;
  width: 100%;
  margin-top: 6.25rem;
`;
const MarketingLines = styled.div`
  display: flex;
  width: 100%;
  /* width: 64rem; */
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.5rem 1.5rem;
  margin-top: 2.5rem;
`;

export default Marketing;
