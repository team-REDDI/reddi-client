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
              <WantText now={true}>{value}</WantText>
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
