import styled from "styled-components";
import { colors } from "../styles/colors";
import { useNavigate } from "react-router-dom";

interface MarketingProps {
  imgSrc: string;
  type: string;
  title: string;
  expl: string;
  read: number;
  categories: string[];
}

export const SmallMarketingBox = ({
  imgSrc,
  type,
  title,
  expl,
  read,
  categories,
}: MarketingProps) => {
  const nav = useNavigate();

  const goToBrandDetail = () => {
    nav("/marketing/detail/0");
  };

  return (
    <Container onClick={goToBrandDetail}>
      <MarketingImg src={require("../assets/images/exemple.png")} />
      <TitleWrapper>
        <Title>{title}</Title>
        <ExpText>{expl}</ExpText>
      </TitleWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 31.1875rem;
  height: fit-content;
  align-items: flex-start;
  cursor: pointer;
`;

const MarketingImg = styled.img`
  display: flex;
  width: 8.125rem;
  height: 6.25rem;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  color: ${colors.black};
  width: 18.75rem;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  text-align: start;
  line-height: 130%;
  letter-spacing: -0.015rem;
  margin-bottom: 0.75rem;
`;

const ExpText = styled.span`
  color: ${colors.grey_600};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  text-align: start;
  letter-spacing: -0.01rem;
`;
