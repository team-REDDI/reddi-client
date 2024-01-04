import styled from "styled-components";
import { colors } from "../styles/colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 49.5625rem;
`;

export const HomeImage = styled.img`
  position: absolute;
  width: 100%;
  height: 49.5rem;
  position: absolute;
  top: 4.4rem;
`;

export const EventContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 11.12rem 0 0 18.75rem;
  gap: 1.5rem;
`;

export const EventText = styled.span`
  color: ${colors.white};
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

export const EventTitle = styled.span`
  color: ${colors.white};
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 800;
  line-height: 6rem;
`;

export const EventContent = styled.div`
  color: ${colors.white};
  width: 42.1rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.55rem;
`;

export const EventButton = styled.div`
  color: ${colors.white};
  font-size: 0.95rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4rem;
  margin-top: 0.1rem;
  border-bottom: 1px solid currentColor; /* 밑줄처럼 보이게 함 */
  padding-bottom: 0.001rem;
  /* text-decoration: underline; */

  cursor: pointer;
`;

export const BrandTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25.68rem;
  height: 4.1rem;
  margin: 7.12rem 0 0 18.75rem;
`;

export const BrandTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  height: 4.1rem;
`;

export const HomeTitleWeight = styled.div`
  color: ${colors.black};
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 130%;
  width: fit-content;
  margin-right: 0.5rem;
`;

export const HomeTitle = styled.div`
  color: ${colors.black};
  font-size: 3.125rem;
  font-weight: 400;
  line-height: 130%;
  width: fit-content;
  margin-right: 1.25rem;
`;

export const DateText = styled.span`
  color: ${colors.grey_500};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.0125rem;
`;

export const MarketingTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 65rem;
  height: 4.1rem;
  margin: 7.12rem 0 0 18.75rem;
`;
