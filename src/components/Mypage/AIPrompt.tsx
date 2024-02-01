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
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getCreatedAIPrompt } from "../../apis/mypageAPI";

interface PromptProps {
  toggleAIPrompt: () => void;
  id: number;
  accessToken: string;
}

export const AIPrompt = ({ toggleAIPrompt, id, accessToken }: PromptProps) => {
  interface CreatedList {
    prompt: PromptList;
    result: ResultList;
  }

  interface PromptList {
    elements?: string;
    atmospheres?: string;
    industries?: string;
    targets?: string;
    similarServices?: string;
  }

  interface ResultList {
    [key: string]: string;
  }

  const {
    data: createdData,
    isLoading,
    isError,
  } = useQuery(["createdData", accessToken, id], () =>
    getCreatedAIPrompt(accessToken, id),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !createdData) {
    return <div>Error fetching data</div>;
  }
  console.log("c", createdData);

  return (
    <PromptContanier>
      <ReddiAIContainer>
        <PromptBox>
          <CloseButton onClick={toggleAIPrompt} />
          <PromptTitle>생성한 브랜드명</PromptTitle>
          <PromptSubTitle>생성한 브랜드 요소</PromptSubTitle>
          <AIResultBox>
            {createdData.result &&
              Object.entries(createdData.result).map(([key, value], index) => (
                <ResultLine key={index}>
                  <TypeText>{key}</TypeText>
                  <ValueText>{value as string}</ValueText>
                </ResultLine>
              ))}
            {createdData.prompt &&
              Object.entries(createdData.prompt).map(([key, value], index) => (
                <ResultLine key={index}>
                  {(value as string)
                    .split(",")
                    .map((item: string, itemIndex: number) => (
                      <div key={`${index}-${itemIndex}`}>{item.trim()}</div>
                    ))}
                </ResultLine>
              ))}
          </AIResultBox>
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
