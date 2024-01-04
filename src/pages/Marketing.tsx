import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
const Marketing = () => {
  return (
    <MarketingPageContainer>
      <NavBar />
      <Header title="마케팅" />
    </MarketingPageContainer>
  );
};

const MarketingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Marketing;
