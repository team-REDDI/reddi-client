import styled from "styled-components";
import { colors } from "../../styles/colors";
import {
  AIResultBox,
  AIResultContanier,
  ReddiAIContainer,
  ResultLine,
  TagsBox,
  TagsContainer,
  TypeText,
  WantBox,
  WantTags,
  WantText,
} from "../../styles/ReddiAIStyle";
import { ReactComponent as CloseIcon } from "../../assets/svgs/closeButton.svg";
type PromptProps = {
  show: boolean;
  toggleAIPrompt: () => void;
};

export const AIPrompt = ({ show, toggleAIPrompt }: PromptProps) => {
  return (
    <PromptContanier>
      <ReddiAIContainer>
        <PromptBox>
          <CloseButton onClick={toggleAIPrompt} />
          <PromptTitle>생성한 브랜드명</PromptTitle>
          <PromptSubTitle>생성한 브랜드 요소</PromptSubTitle>
          <AIResultBox>
            {/* {resultData &&
          Object.entries(resultData).map(([key, value]) => (
            <ResultLine>
              <TypeText>{key}</TypeText>
              <ValueText>{value}</ValueText>
            </ResultLine>
          ))} */}
            <ResultLine>
              <TypeText>네이밍</TypeText>
              <ValueText>Z-Fin</ValueText>
            </ResultLine>
            <ResultLine>
              <TypeText>네이밍 이유</TypeText>
              <ValueText>
                Z-Fin은 즐거운 분위기와 역동적인 금융 서비스를 제공하기 위해
                만들어졌습니다. 산업군인 금융과 F&B를 융합하여 차별화된 브랜드
                경험을 제공합니다.
              </ValueText>
            </ResultLine>
            <ResultLine>
              <TypeText>슬로건</TypeText>
              <ValueText>Enjoy Your Financial Journey</ValueText>
            </ResultLine>
            <ResultLine>
              <TypeText>버전 미션</TypeText>
              <ValueText>
                Z-Fin은 첨단 기술과 창의적인 아이디어로 어려움을 도전하는
                솔루션을 개발하여 gen Z, 시니어, 20대 고객들의 금융 경험을
                혁신하고자 합니다.
              </ValueText>
            </ResultLine>
          </AIResultBox>
          {/* <ButtonBox>
        <DeleteButton>다시 생성하기</DeleteButton>
        <CompleteButton>저장하기</CompleteButton>
      </ButtonBox> */}
        </PromptBox>
      </ReddiAIContainer>
    </PromptContanier>
  );
};

const PromptContanier = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  top: 3.125rem;
  left: 0;
`;

const PromptBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: fit-content;
  padding: 3.5rem 3rem;
  background-color: ${colors.white};
`;

const PromptTitle = styled.div`
  color: ${colors.red};
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 2.925rem */
  letter-spacing: -0.0225rem;
  margin-bottom: 3.81rem;
`;

const PromptSubTitle = styled.div`
  color: ${colors.black_CTA};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 1.95rem */
  letter-spacing: -0.015rem;
  margin-bottom: 2.06rem;
`;

const ValueText = styled.div`
  color: ${colors.black_CTA};
  width: 52.5rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01125rem;
  box-sizing: border-box;
`;

const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 1.75rem;
  right: 1.63rem;
  background: transparent;
  border: none;
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;
