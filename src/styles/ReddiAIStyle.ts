import styled from "styled-components";
import { colors } from "./colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReddiAIContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 64rem;
`;

export const ReddiAITitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  margin-top: 9.375rem;
`;

export const ReddiAILine = styled.div`
  display: flex;
`;

export const ReddiAI = styled.span`
  color: ${colors.red};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.0225rem;
`;

export const ReddiAITitle = styled.span`
  color: ${colors.black};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.0225rem;
`;

export const ReddiAIExp = styled.span`
  color: ${colors.black_CTA};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01125rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.69rem;
  align-items: flex-start;
  width: 100%;
  margin-top: 5.12rem;
`;

export const OrderContaniner = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  background-color: ${colors.black};
`;

export const OrderBox = styled.div`
  display: flex;
  gap: 0.5rem;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

export const OrderNumber = styled.div<{ now?: boolean }>`
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${(props) => (props.now ? colors.red : "#626262")};
  border-radius: 100%;
  font-size: 13px;
  font-weight: 700;
  color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

export const OrderText = styled.div<{ now?: boolean }>`
  display: flex;
  color: ${(props) => (props.now ? colors.white : "#626262")};
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: -0.18px;
`;

export const OrderLine = styled.div<{ now?: boolean }>`
  width: 3.625rem;
  height: 1px;
  background-color: ${(props) => (props.now ? colors.white : "#626262")};
`;

export const WantBox = styled.div<{ now?: boolean; index?: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding: 2.62rem 2.38rem;
  box-sizing: border-box;
  gap: 1.5rem;
  border: 0.3px solid #000;
  background-color: ${colors.white};
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.25);

  cursor: pointer;
`;

export const WantText = styled.div<{ now?: boolean; index?: number }>`
  color: ${(props) => (props.now ? colors.black_CTA : "#8f8f8f")};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01125rem;
  box-sizing: border-box;
`;

export const TagsBox = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 0.75rem 0.5rem;
  flex-wrap: wrap;
`;

export const WantTags = styled.div<{ isClicked?: boolean }>`
  display: flex;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;

  border-radius: 4.46rem;
  border: 0.714px solid
    ${(props) => (props.isClicked ? colors.black_CTA : "#8f8f8f")};
  background-color: ${(props) => (props.isClicked ? "#2e2e2e" : colors.white)};
  color: ${(props) => (props.isClicked ? colors.white : "#8f8f8f")};
`;

export const WantTagsInputBox = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.31rem;
  gap: 0.5rem;
  background-color: ${colors.white};
  width: fit-content;
  padding: 0.5rem 1.25rem;
  border-radius: 6.25rem;
  box-sizing: border-box;
`;

export const WantTagsInput = styled.input`
  width: 6.7rem;
  outline: none;
  border: none;
  color: ${colors.black_CTA};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01rem;

  background-color: transparent;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari */
    color: #8f8f8f;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 2.06rem;
  margin-bottom: 3rem;
  cursor: pointer;
`;

export const DeleteButton = styled.div`
  display: flex;
  width: 16.3125rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;

  background-color: #eaeaea;
  color: ${colors.black_CTA};
  cursor: pointer;
`;

export const CompleteButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.3125rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.446rem;
  background-color: ${colors.black};
  color: ${colors.white};
`;

export const AIResultContanier = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.06rem;
  width: 100%;
  height: fit-content;
  margin-top: 5.3rem;
`;

export const AIResultBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
  padding: 1.4375rem 1.875rem;
`;

export const ResultText = styled.div`
  color: ${colors.red};
  font-size: 24px;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.24px;
`;

export const ResultLine = styled.div`
  display: flex;
  width: fit-content;
  gap: 3.12rem;
`;

export const TypeText = styled.span`
  color: #a5a5a5;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.00875rem;
  width: 2.4rem;
`;

export const LoadingContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const LoadingBox = styled.div`
  display: flex;
  /* padding: 1.875rem 6.5rem; */
  justify-content: center;
  align-items: center;
  z-index: 99;
  border-radius: 0.625rem;
  background-color: ${colors.white};
  width: 27.2rem;
  height: 26.44rem;
`;

export const LoadingImgBox = styled.div`
  display: flex;
  height: 22.6875rem;
  width: 14.2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
`;

export const LoadingTitle = styled.span`
  color: ${colors.black};
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.015rem;
`;

export const LoadingText = styled.span`
  color: #ccc;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.01rem;
`;

export const LoadingImg = styled.img`
  width: 100%;
`;

export const LoadingDots = styled.img`
  width: 5.25rem;
  height: 5.25rem;
  //얘는 라이브러리 쓰거나..!? 하나 만들거나 하려고 합니다..~!!
`;

export const Blank = styled.div`
  display: flex;
  height: 3.13rem;
`;
