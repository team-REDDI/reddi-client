import styled from "styled-components";
import { colors } from "../styles/colors";
import { useNavigate } from "react-router-dom";

interface MarketingProps {
  id: number;
  imgSrc: string;
  type: string;
  title: string;
  expl: string;
  read: number;
  categories: string[];
}

export const SmallMarketingBox = ({
  id,
  imgSrc,
  type,
  title,
  expl,
  read,
  categories,
}: MarketingProps) => {
  const nav = useNavigate();

  const goToMarketingDetail = () => {
    nav(`/marketing/detail/${id}`);
  };
  //글자가 넘어가면 ..표시 되도록
  const editContent = (content: String) => {
    if (content.length >= 0) {
      return content.substring(0, 19) + "..";
    } else return;
  };

  return (
    <Container onClick={goToMarketingDetail}>
      <MarketingImg src={imgSrc} />
      <TitleWrapper>
        <Title>{title}</Title>
        <ExpText>{editContent(expl)}</ExpText>
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
  object-fit: cover;
  object-position: center;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
