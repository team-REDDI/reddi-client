import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Filter from "../components/Filter";
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
    </MarketingPageContainer>
  );
};

const MarketingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Marketing;
