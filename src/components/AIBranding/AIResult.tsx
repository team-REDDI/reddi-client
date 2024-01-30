import styled from "styled-components";
import {
  AIResultBox,
  AIResultContanier,
  ButtonBox,
  CompleteButton,
  DeleteButton,
  ResultLine,
  TypeText,
  WantText,
} from "../../styles/ReddiAIStyle";
import { ResultText } from "../../styles/searchStyle";
import { colors } from "../../styles/colors";

interface AIResultProps {
  resultData: [string, string][];
}

const AIResult = ({ resultData }: AIResultProps) => {
  return (
    <AIResultContanier>
      <ResultText>Reddi AI가 추천하는 홍길동님의 브랜드에요.</ResultText>
      <AIResultBox>
        {resultData &&
          Object.entries(resultData).map(([key, value]) => (
            <ResultLine>
              <TypeText>{key}</TypeText>
              <ValueText>{value}</ValueText>
            </ResultLine>
          ))}
      </AIResultBox>
      {/* <ButtonBox>
        <DeleteButton>다시 생성하기</DeleteButton>
        <CompleteButton>저장하기</CompleteButton>
      </ButtonBox> */}
    </AIResultContanier>
  );
};

export default AIResult;

const ValueText = styled.div`
  color: ${colors.black_CTA};
  width: 54.8rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01125rem;
  box-sizing: border-box;
`;
