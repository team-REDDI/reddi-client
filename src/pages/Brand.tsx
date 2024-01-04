import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
const Brand = () => {
  return (
    <BrandPageContainer>
      <NavBar />
      <Header title="브랜드" />
    </BrandPageContainer>
  );
};

const BrandPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Brand;
