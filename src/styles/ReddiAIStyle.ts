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
  gap: 6.25rem;
`;

export const ReddiAITitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  margin-top: 6.25rem;
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

export const WantTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const QText = styled.div`
  color: ${colors.red};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
`;

export const WantText = styled.div`
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
  gap: 4.38rem;
  align-items: flex-start;
  width: 100%;
  //margin-top: 6.25rem;
`;

export const TagsBox = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 0.75rem 0.5rem;
  flex-wrap: wrap;
`;

export const WantTags = styled.div`
  display: flex;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;

  border-radius: 4.45988rem;
  border: 1.427px solid ${colors.black_CTA};
  background-color: #2e2e2e;
  color: ${colors.white};
`;

export const ButtonBox = styled.div`
  display: flex;
  right: 0;
  gap: 0.75rem;
`;

export const DeleteButton = styled.div`
  display: flex;
  width: 16.3125rem;
  height: 2.5rem;
  box-sizing: border-box;
  padding: 1rem 13.125rem;
  justify-content: center;
  align-items: center;

  background-color: #eaeaea;
  color: ${colors.black_CTA};
`;

export const CompleteButton = styled.div`
  display: flex;
  width: 16.3125rem;
  height: 2.5rem;
  padding: 1rem 13.125rem;
  box-sizing: border-box;
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
`;

export const AIResultBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
  padding: 1.4375rem 1.875rem;
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
