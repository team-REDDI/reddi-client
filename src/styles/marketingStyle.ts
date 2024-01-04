import styled from "styled-components";
import { colors } from "../styles/colors";

export const MarketingDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15.63rem 0 0 18.75rem;
  gap: 1.5rem;
`;

export const TagBox = styled.div`
  display: flex;
  width: 22.5rem;
  justify-content: space-between;
`;

export const FilterTag = styled.div`
  display: flex;
  padding: 0.25rem 1.25rem;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  color: ${colors.white};
  background-color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
`;

export const MarketingTitle = styled.div`
  color: ${colors.white};
  font-size: 5rem;
  font-weight: 700;
  line-height: 120%;
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
  width: 82.375rem;
  margin-top: 5.88rem;
`;

export const BrandImage = styled.img`
  display: flex;
  width: 82.375rem;
  height: 106.96075rem;
  margin-top: 3.12rem;
`;

export const MarketingExplain = styled.span`
  color: ${colors.grey_900};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 170%;
  margin-bottom: 6.25rem;
`;
