import styled from "styled-components";
import { colors } from "../../styles/colors";
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

  return (
    <PromptContanier>
      <PromptBox>
        <CloseButton onClick={toggleAIPrompt} />
        <PromptTitle>생성한 브랜드명</PromptTitle>
        <OverflowBox>
          <ResultBox>
            <PromptSubTitle>브랜드 생성 결과</PromptSubTitle>
            <AIResultBox>
              {createdData.result &&
                Object.entries(createdData.result).map(
                  ([key, value], index) => (
                    <ResultLine key={index}>
                      <TypeText>{key}</TypeText>
                      <ValueText>{value as string}</ValueText>
                    </ResultLine>
                  ),
                )}
            </AIResultBox>
          </ResultBox>
          <ResultBox>
            <PromptSubTitle>선택한 브랜드 태그</PromptSubTitle>
            <TagBox>
              {createdData.prompt &&
                Object.entries(createdData.prompt).map(([key, value], index) =>
                  (value as string)
                    .split(",")
                    .map((item: string, itemIndex: number) => (
                      <PromptTag key={`${index}-${itemIndex}`}>
                        {item.trim()}
                      </PromptTag>
                    )),
                )}
            </TagBox>
          </ResultBox>
        </OverflowBox>
      </PromptBox>
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
  align-items: flex-start;
  padding: 3.125rem 0;
  background-color: ${colors.white};
  width: 48rem;
  height: 40rem;
  margin-bottom: 3.125rem;
`;

const OverflowBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 3.875rem;
  gap: 2rem;
  width: 48rem;
  height: 36rem;
  overflow: auto;
`;

const ResultBox = styled.div`
  display: flex;
  width: 100%;
  /* height: 12.43rem; */
  flex-direction: column;
`;

const ResultLine = styled.div`
  display: flex;
  width: fit-content;
  gap: 0.625rem;
`;

const TypeText = styled.span`
  color: #a5a5a5;
  font-size: 0.825rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.00875rem;
  width: 4.5rem;
  margin-right: 1.12rem;
`;

const PromptTitle = styled.div`
  color: ${colors.red};
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 2.925rem */
  letter-spacing: -0.0225rem;
  width: 100%;
  text-align: center;
`;

const PromptSubTitle = styled.div`
  color: ${colors.black_CTA};
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 1.95rem */
  letter-spacing: -0.015rem;
  margin-bottom: 1.25rem;
`;

const AIResultBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
  padding: 1.4375rem 1.875rem;
  border-radius: 0.75rem;
  background-color: ${colors.background_gray};
`;

const ValueText = styled.div`
  color: ${colors.black_CTA};
  width: 30.3rem;
  font-size: 0.975rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01125rem;
  box-sizing: border-box;
`;

const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 1.7rem;
  right: 1.8rem;
  background: transparent;
  border: none;
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;

const TagBox = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5rem;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.75rem;
  border: 1.2px solid #ddd;
  background: ${colors.white};
  flex-wrap: wrap;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const PromptTag = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4.46rem;
  background: #2e2e2e;
  color: ${colors.white};
  font-size: 0.975rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01125rem;
`;
