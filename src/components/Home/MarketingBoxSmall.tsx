import styled from "styled-components";
import { colors } from "../../styles/colors";
import { useNavigate } from "react-router-dom";

interface MarketingProps {
  lank: number | null;
  imgSrc: string;
  title: string;
  expl: string;
}

export const MarketingBoxSmall = ({
  lank = null,
  imgSrc,
  title,
  expl,
}: MarketingProps) => {
  const nav = useNavigate();

  const goToBrandDetail = () => {
    nav("/marketing/detail/0");
  };

  return (
    <Container onClick={goToBrandDetail}>
      {lank ? <LankNum>{lank}</LankNum> : null}
      <MarketingImg src={require("../../assets/images/exemple.png")} />
      <TextBox>
        <Title>{title}</Title>
        <ExpText>{expl}</ExpText>
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 30.56rem;
  height: 6.25rem;
  align-items: flex-start;
  cursor: pointer;
`;

const LankNum = styled.span`
  color: ${colors.black};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
  margin-right: 1.5rem;
  width: 0.93rem;
`;

const MarketingImg = styled.img`
  display: flex;
  width: 8.125rem;
  height: 6.25rem;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
  width: 18.75rem;
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
  line-height: 130%; /* 1.3rem */
  letter-spacing: -0.01rem;
`;
