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
`;

export const ContentType = styled.span`
  display: flex;
  color: #818181;
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01rem;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
`;
