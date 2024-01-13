import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Filter from "../components/Filter";
import dropdownDataBrand from "../assets/datas/dropDownDataBrand.json";
import Footer from "../components/Footer";
import { BrandTitleRow, HomeTitle } from "../styles/HomeStyle";
import {
  RefBox,
  BrandContainer,
  BrandLocation,
  BrandNameText,
  BrandTags,
  BrandTextBox,
} from "../styles/brandStyle";
import { ReactComponent as Toss } from "../assets/svgs/toss_2.svg";
import { BrandBox } from "../components/BrandBox";

const Brand = () => {
  return (
    <BrandPageContainer>
      <NavBar />
      <Header
        title="브랜드"
        subtitle="브랜드 레퍼런스들을 보여주는 페이지입니다. (짧은 페이지 설명)"
      />
      <Filter dropdownItems={dropdownDataBrand} pageType="brand" />
      <ReferenceBox>
        <BrandTitleRow>
          <HomeTitle>브랜드 레퍼런스</HomeTitle>
        </BrandTitleRow>
        <BrandContainer>
          <BrandBox
            imgSrc=""
            brandName="토스증권"
            location="대기업, 서울"
            tags={["IT/금융", "블루"]}
          />
          <BrandBox
            imgSrc=""
            brandName="토스증권"
            location="대기업, 서울"
            tags={["IT/금융"]}
          />
          <BrandBox
            imgSrc=""
            brandName="토스증권"
            location="대기업, 서울"
            tags={["IT/금융"]}
          />
        </BrandContainer>
      </ReferenceBox>
      <Footer />
    </BrandPageContainer>
  );
};

const BrandPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReferenceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.25rem;
  width: 100%;
  padding-left: 10.69rem;
  padding-right: 10.69rem;
  box-sizing: border-box;
`;

export default Brand;
