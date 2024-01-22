// reddiAI 를 통해 생성된 컨텐츠들
import styled from "styled-components";
import AIBox from "./AIBox";

const createdBrandData = [
  {
    id: 1,
    title: "뱅크샐러드",
    options: ["네이밍", "로고", "슬로건", "비전미션"],
  },
  {
    id: 2,
    title: "생성한 브랜드2",
    options: ["네이밍", "로고", "슬로건"],
  },
  {
    id: 3,
    title: "생성한 브랜드3",
    options: ["네이밍", "로고", "비전미션", "슬로건"],
  },
  {
    id: 4,
    title: "생성한 브랜드4",
    options: ["네이밍", "로고"],
  },
  {
    id: 4,
    title: "생성한 브랜드5",
    options: ["네이밍", "로고", "로고", "로고", "로고", "로고", "로고"],
  },
];

export const CreatedContents = () => {
  return (
    <div>
      <BoxContainer>
        {createdBrandData.map((brand) => (
          <AIBox key={brand.id} title={brand.title} options={brand.options} />
        ))}
      </BoxContainer>
    </div>
  );
};
const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.75rem;
  margin-bottom: 6.25rem;
`;
