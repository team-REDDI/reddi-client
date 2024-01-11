import styled from "styled-components";
import { colors } from "../styles/colors";
import { useNavigate } from "react-router-dom";

interface MarketingProps {
  imgSrc: string;
  type: string;
  title: string;
  expl: string;
  read: number;
}

export const MarketingBox = ({
  imgSrc,
  type,
  title,
  expl,
  read,
}: MarketingProps) => {
  const nav = useNavigate();

  const goToBrandDetail = () => {
    nav("/marketing/detail/0");
  };

  return (
    <Container onClick={goToBrandDetail}>
      <MarketingImg src={require("../assets/images/exemple.png")} />
      <TypeText>{type}</TypeText>
      <Title>{title}</Title>
      <ExpText>{expl}</ExpText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.3125rem;
  height: fit-content;
  align-items: flex-start;
  cursor: pointer;
`;

const MarketingImg = styled.img`
  display: flex;
  width: 20.3125rem;
  height: 14.75rem;
  margin-bottom: 1.5rem;
`;

const TypeText = styled.span`
  color: ${colors.grey_500};
  font-size: 0.875rem;
  font-weight: 500;

  letter-spacing: -0.00875rem;
  margin-bottom: 0.75rem;
`;

const Title = styled.span`
  color: ${colors.black};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
  margin-bottom: 0.75rem;
`;

const ExpText = styled.span`
  color: ${colors.grey_600};
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01rem;
`;
