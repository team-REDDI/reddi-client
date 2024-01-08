import styled from "styled-components";
import { colors } from "../styles/colors";

export const BrandDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 22.07rem;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${colors.black_CTA};
  gap: 0.625rem;
  box-sizing: border-box;
`;

export const GoBackButton = styled.div`
  display: flex;
  position: relative;
  top: 1.63rem;
  left: 2.25rem;
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.01rem;
  cursor: pointer;
`;

export const LogoBox = styled.div`
  display: flex;
  margin: 11.25rem 0 0 10.69rem;
`;

export const LogoImg = styled.img`
  width: 10.0625rem;
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
`;

export const BrandName = styled.span`
  color: ${colors.white};
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const BrandType = styled.span`
  color: #bebebe;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6.25rem;
  width: 60.8125rem;
  height: fit-content;
  margin-top: 6.25rem;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
`;

export const ContentBoxCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

export const ContentType = styled.div`
  color: #818181;
  font-size: 1rem;
  box-sizing: border-box;
  width: 6.4rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01rem;
  margin-right: 6.25rem;
`;

export const LogoImg2 = styled.img`
  display: flex;
  width: 16.67rem;
`;

export const BrandStory = styled.div`
  color: ${colors.black_CTA};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.00875rem;
  width: 45rem;
`;

export const BrandExpBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.875rem;
`;

export const BrandExpTitle = styled.span`
  color: ${colors.black_CTA};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01125rem;
`;

export const BrandExpText = styled.div`
  color: #5f5f5f;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.00875rem;
`;

export const MarketingCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 61rem;
  height: 23.75rem;
  gap: 2.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
`;
