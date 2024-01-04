import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Filter from "../components/Filter";
const Marketing = () => {
  return (
    <MarketingPageContainer>
      <NavBar />
      <Header title="마케팅" />
      <Filter />
    </MarketingPageContainer>
  );
};

const MarketingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Marketing;
