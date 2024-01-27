import styled from "styled-components";
import { colors } from "../styles/colors";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
interface MarketingProps {
  id: number;
  imgSrc: string;
  type: string | undefined;
  title: string;
  expl: string;
  read: number;
  categories: string[];
}

export const MarketingBox = ({
  id,
  imgSrc,
  type,
  title,
  expl,
  read,
  categories,
}: MarketingProps) => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const nav = useNavigate();

  const goToMarketingDetail = () => {
    nav(`/marketing/detail/${id}`);
  };

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  //글자가 넘어가면 ..표시 되도록
  const editContent = (content: String) => {
    if (content.length >= 0) {
      return content.substring(0, 19) + "..";
    } else return;
  };

  return (
    <Container>
      <MarketingImg src={imgSrc} onClick={goToMarketingDetail} />
      <TextBox>
        <TypeText onClick={goToMarketingDetail}>{type}</TypeText>
        <Title onClick={goToMarketingDetail}>{title}</Title>
        <ExpText onClick={goToMarketingDetail}>{expl}</ExpText>
        <CategoryContainer onClick={toggleCategories}>
          {categories
            .slice(0, showAllCategories ? categories.length : 3)
            .map((category, index) => (
              <Category key={index}>{category}</Category>
            ))}
          {categories.length > 3 && (
            <PlusButton>{showAllCategories ? "x" : "+"}</PlusButton>
          )}
        </CategoryContainer>
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: calc(33.333% - 1.5rem); */
  width: 20.3125rem;
  height: fit-content;
  align-items: flex-start;
  cursor: pointer;
`;

const MarketingImg = styled.img`
  display: flex;
  width: 20.3125rem;
  height: 14.75rem;
  object-fit: cover;
  object-position: center;
  border-radius: 0.75rem 0.75rem 0rem 0rem;
`;

const TextBox = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  width: 20.3125rem;
  height: fit-content;
  border-radius: 0rem 0rem 0.75rem 0.75rem;
  background-color: #fafafa;
`;

const TypeText = styled.span`
  color: ${colors.grey_500};
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.00875rem;
`;

const Title = styled.span`
  color: ${colors.black};
  width: 17rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PlusButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  color: ${colors.red};
  background-color: ${colors.white};
`;

const ExpText = styled.span`
  color: ${colors.grey_600};
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01rem;
  width: 17.125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CategoryContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  gap: 0.34rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  align-items: center;
  color: ${colors.red};
  background-color: ${colors.white};
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01rem;
`;
