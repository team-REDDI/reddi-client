// reddiAI 를 통해 생성된 컨텐츠들
import { colors } from "../../styles/colors";

import styled from "styled-components";
import AIBox from "../AIBox";

export const CreatedContents = () => {
  return (
    <div>
      <BoxContainer>
        <AIBox />
      </BoxContainer>
    </div>
  );
};
const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem 1.5rem;
  margin-bottom: 6.25rem;
`;
