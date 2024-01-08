import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Filter from "../components/Filter";
import dropdownDataBrand from "../assets/datas/dropDownDataBrand.json";
const Brand = () => {
  return (
    <BrandPageContainer>
      <NavBar />
      <Header
        title="브랜드"
        subtitle="브랜드 레퍼런스들을 보여주는 페이지입니다. (짧은 페이지 설명)"
      />
      <Filter dropdownItems={dropdownDataBrand} />
    </BrandPageContainer>
  );
};

const BrandPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Brand;
