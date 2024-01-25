import styled from "styled-components";
import { colors } from "../styles/colors";

export const MarketingDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.125rem;
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

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 31.25rem;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const IntroBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8.63rem 0 0 10.69rem;
  gap: 1.25rem;
`;

export const TagBox = styled.div`
  display: flex;
  width: fit-content;
  gap: 0.38rem;
  justify-content: space-between;
`;

export const FilterTag = styled.div<{ weight?: number }>`
  display: flex;
  padding: 0.25rem 1.25rem;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.black_CTA};
  box-sizing: border-box;
  color: ${colors.white};
  background-color: ${colors.black_CTA};
  font-size: 1.25rem;
  text-align: center;
  font-weight: ${(props) => (props.weight ? props.weight : 500)};
`;

export const MarketingTitle = styled.div`
  color: ${colors.white};
  font-size: 3rem;
  font-weight: 700;
`;

export const DataTable = styled.div`
  display: flex;
  width: 17.75rem;
  justify-content: space-between;
`;

export const DataColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
`;

export const DataType = styled.span`
  color: #dcdcdc;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 170%;
`;

export const DataText = styled.span`
  color: ${colors.white};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 170%;
`;

export const ExplBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 63.903rem;
  height: fit-content;
  margin-top: 2.38rem;
  gap: 1.87rem;
  margin-bottom: 2.5rem;
`;

export const MarketingDetailTitle = styled.div`
  color: ${colors.black};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
  margin-top: 2.5rem;
`;

export const BrandImage = styled.img`
  display: flex;
  width: 60%;
  /* margin-top: 1.88rem; */
`;

export const MarketingExplain = styled.span`
  color: ${colors.grey_900};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 170%;
  /* margin: 1.87rem 0 2.5rem 0; */
`;

export const MarketingTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.5rem;
  width: 64rem;
  border-top: 0.03rem solid ${colors.black_CTA};
  border-bottom: 0.1rem solid ${colors.black_CTA};
  padding: 1.5rem 0;
`;
