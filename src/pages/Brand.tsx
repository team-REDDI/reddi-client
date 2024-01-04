import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Filter from "../components/Filter";
const Brand = () => {
  const dropdownDataBrand = {
    industry: [
      { name: "뷰티", value: "뷰티" },
      { name: "금융", value: "금융" },
      { name: "F&B", value: "F&B" },
      { name: "IT", value: "IT" },
    ],
    brandcolor: [
      { name: "블루", value: "블루" },
      { name: "그레이", value: "그레이" },
    ],
    atmosphere: [
      { name: "깔끔한", value: "깔끔한" },
      { name: "세련된", value: "세련된" },
    ],
    sort: [
      { name: "인기순", value: "인기순" },
      { name: "추천순", value: "추천순" },
    ],
  };
  return (
    <BrandPageContainer>
      <NavBar />
      <Header title="브랜드" />
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
