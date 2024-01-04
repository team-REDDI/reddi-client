import styled from "styled-components";
import { colors } from "../styles/colors";

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
  const goToBrandDetail = () => {};
  return (
    <Container onClick={goToBrandDetail}>
      <MarketingImg src={require("../assets/images/exemple.png")} />
      <TypeText>{type}</TypeText>
      <Title>{title}</Title>
      <ExpText>{expl}</ExpText>
      <ReadText>읽음 {read}</ReadText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 26.5625rem;
  height: fit-content;
  align-items: flex-start;
  cursor: pointer;
`;

const MarketingImg = styled.img`
  display: flex;
  width: 26.5625rem;
  height: 20.125rem;
  margin-bottom: 2.5rem;
`;
const TypeText = styled.span`
  color: ${colors.grey_500};
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.6rem;
  margin-bottom: 1.25rem;
`;

const Title = styled.span`
  color: ${colors.black};
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 1.25rem;
`;

const ExpText = styled.span`
  color: ${colors.grey_600};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
  margin-bottom: 1.25rem;
`;

const ReadText = styled.span`
  color: ${colors.grey_700};
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.6rem;
`;
