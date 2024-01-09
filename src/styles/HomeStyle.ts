import styled from "styled-components";
import { colors } from "../styles/colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 28.125rem;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const HomeImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const EventContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 11.62rem 0 0 10.69rem;
  gap: 0.75rem;
`;

export const EventText = styled.span`
  color: ${colors.black};
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

export const EventTitle = styled.span`
  color: ${colors.black};
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 800;
`;

export const EventContent = styled.div`
  color: ${colors.black};
  /* width: 42.1rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.55rem; */
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
`;

export const EventButton = styled.div`
  color: ${colors.black};
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

export const BrandLankContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: fit-content;
  margin-top: 6.25rem;
  width: fit-content;
`;

export const BrandTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25.68rem;
  height: 4.1rem;
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
  font-weight: 800;
  line-height: 130%;
  width: fit-content;
  margin-right: 1.25rem;
`;

export const HomeTitle = styled.div`
  color: ${colors.black};
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 2.925rem */
  letter-spacing: -0.0225rem;
`;

export const DateText = styled.span`
  color: ${colors.grey_500};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.0125rem;
`;

export const LankBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 26.15rem;
  width: fit-content;
  align-items: flex-start;
  margin-top: 2.5rem;
`;

export const GreyLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 60.63194rem;
  height: 0.09175rem;
  background-color: #d6d7dc;
`;

export const MarketingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: fit-content;
  width: 64rem;
  margin-top: 6.25rem;
`;

export const MarketingTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 4.1rem;
`;

export const MarketingCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 64rem;
  height: 25rem;
  gap: 2.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
`;

export const MarketingLine = styled.div`
  display: flex;
  width: 64rem;
  gap: 1.5rem;
  margin-top: 2.5rem;
`;

export const Banner = styled.div`
  display: flex;
  width: 64rem;
  padding: 2.1875rem 4.6875rem;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  gap: 0.625rem;
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 6.25rem;
`;

export const BannerText = styled.span`
  color: ${colors.black};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.0225rem;
  width: 100%;
`;

export const Blank = styled.div`
  display: flex;
  height: 27.7rem;
`;
