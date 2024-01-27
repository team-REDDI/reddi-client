import styled from "styled-components";
import { colors } from "../../styles/colors";
import { useNavigate } from "react-router-dom";

interface BrandLankProps {
  id: number;
  lank: number;
  name: string;
  // Icon: React.FC;
  Icon: string;
  industry: string;
}

export const BrandLankBox = ({
  id,
  lank,
  name,
  Icon,
  industry,
}: BrandLankProps) => {
  const nav = useNavigate();

  const goToBrandDetail = () => {
    nav(`/brand/detail/${id}`);
  };
  return (
    <LankContainer onClick={goToBrandDetail}>
      <LankLine>
        <LankInfo>
          <LankNum>{lank}</LankNum>
          <BrandName>{name}</BrandName>
          <IconImg src={Icon} alt={name} />
        </LankInfo>
        <IndustryTag>{industry}</IndustryTag>
      </LankLine>
    </LankContainer>
  );
};

const LankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  justify-content: center;
  height: 3.75rem;
  margin: 0.75rem 0 1.25rem 0;
  width: 100%;
  cursor: pointer;
`;

const LankLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: center;
  height: 3.12rem;
  width: 100%;
  justify-content: space-between;
`;

const LankInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LankNum = styled.span`
  color: ${colors.black};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%; /* 1.95rem */
  letter-spacing: -0.015rem;
  margin-right: 4.04rem;
`;

const BrandName = styled.span`
  color: ${colors.black};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%; /* 1.95rem */
  letter-spacing: -0.015rem;
  margin-right: 3.01rem;
`;

const IconImg = styled.img`
  display: flex;
  height: 3.125rem;
`;
const IndustryTag = styled.div`
  color: #9fa0a5;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 1.95rem */
  letter-spacing: -0.015rem;
`;
