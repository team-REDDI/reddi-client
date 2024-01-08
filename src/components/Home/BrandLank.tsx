import styled from "styled-components";
import { colors } from "../../styles/colors";
import { useNavigate } from "react-router-dom";

interface BrandLankProps {
  lank: number;
  name: string;
  Icon: React.FC;
}

export const BrandLankBox = ({ lank, name, Icon }: BrandLankProps) => {
  const nav = useNavigate();

  const goToBrandDetail = () => {
    nav("/brand-detail-0");
  };
  return (
    <LankContainer onClick={goToBrandDetail}>
      <LankLine>
        <LankNum>{lank}</LankNum>
        <BrandName>{name}</BrandName>
        <Icon />
        {/* <img src={Icon} alt={name} /> */}
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
  cursor: pointer;
`;

const LankLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: center;
  height: 3.12rem;
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
