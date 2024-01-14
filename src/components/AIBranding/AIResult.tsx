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

const AIResult = () => {
  return (
    <AIResultContanier>
      <ResultText>Reddi AI가 추천하는 홍길동님의 브랜드에요.</ResultText>
      <AIResultBox>
        <ResultLine>
          <TypeText>네이밍</TypeText>
          <WantText>뱅크샐러드</WantText>
        </ResultLine>
        <ResultLine>
          <TypeText>슬로건</TypeText>
          <WantText>금융을 넘어 건강 자산까지, 한 입에</WantText>
        </ResultLine>
      </AIResultBox>
      {/* <ButtonBox>
        <DeleteButton>다시 생성하기</DeleteButton>
        <CompleteButton>저장하기</CompleteButton>
      </ButtonBox> */}
    </AIResultContanier>
  );
};

export default AIResult;
