import styled from "styled-components";
import { colors } from "./colors";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 64rem;
  gap: 6.25rem;
  margin-top: 6.25rem;
`;

export const ResultTitle = styled.span`
  color: ${colors.black_CTA};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.0225rem;
`;

export const ResultText = styled.span`
  color: ${colors.red};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
  margin-bottom: 2.06rem;
`;

export const MarketingResultBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const MarketingsBox = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
`;

export const BrandResultBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BrandsBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3.12rem 1.5rem;
`;
