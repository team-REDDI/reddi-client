import styled from "styled-components";
import { colors } from "../styles/colors";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as BookmarkIcon } from "../assets/svgs/marketingBookmark.svg";
interface MarketingProps {
  id: number;
  imgSrc: string;
  type: string | undefined;
  title: string;
  expl: string;
  read: number;
  categories: string[];
  bookmarkOff?: boolean;
  isBookmarked?: boolean;
}

export const MarketingBox = ({
  id,
  imgSrc,
  type,
  title,
  expl,
  read,
  categories,
  bookmarkOff,
  isBookmarked,
}: MarketingProps) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  // const [isBookmarked, setIsBookmarked] = useState(false);

  const nav = useNavigate();

  const goToMarketingDetail = () => {
    nav(`/marketing/detail/${id}`);
  };

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };
  // const toggleBookmark = () => {
  //   setIsBookmarked(!isBookmarked);
  // };

  //최대 길이 정해서 그것보다 작은만큼 표시하도록 함
  //근데 문제점이 뭐냐면,,, gap까지 고려를 못해주고 글자수만 비교해서 ㅠㅠ 약간 미묘한 문제가 있음..
  const maxTotalLength = 14;

  let sumLength = 0;
  let tagNum = 0;
  const selectedCategories = categories.filter((category) => {
    sumLength += category.length;
    tagNum++;
    return sumLength <= maxTotalLength;
  });

  return (
    <ExpendedContainer>
      <Container>
        <MarketingImg src={imgSrc} onClick={goToMarketingDetail} />
        <TextBox>
          {bookmarkOff ? null : (
            <StyledBookmarkIcon
              // onClick={toggleBookmark}
              isBookmarked={isBookmarked ?? false}
            />
          )}
          <TypeText onClick={goToMarketingDetail}>{type}</TypeText>
          <Title onClick={goToMarketingDetail}>{title}</Title>
          <ExpText onClick={goToMarketingDetail}>{expl}</ExpText>
        </TextBox>
      </Container>
      <CategoryContainer onClick={toggleCategories} showAll={showAllCategories}>
        {categories
          .slice(
            0,
            showAllCategories ? categories.length : selectedCategories.length,
          )
          .map((category, index) => (
            <Category key={index}>{category}</Category>
          ))}
        {categories.length > selectedCategories.length &&
          (showAllCategories ? null : <PlusButton>+</PlusButton>)}
      </CategoryContainer>
    </ExpendedContainer>
  );
};

const ExpendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative;
  margin-bottom: 4.3rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: calc(33.333% - 1.5rem); */
  overflow: hidden;
  flex-wrap: wrap;
  width: 20.3125rem;
  height: auto;
  /* height: 25.875rem; */
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
  position: relative;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  width: 20.3125rem;
  /* overflow: auto; */
  /* height: 11.125rem; */
  height: fit-content;
  /* border-radius: 0rem 0rem 0.75rem 0.75rem; */
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

export const PlusButton = styled.button`
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

const CategoryContainer = styled.div<{ showAll: boolean }>`
  display: flex;
  /* margin-top: 0.5rem; */
  flex-wrap: wrap;
  gap: 0.34rem;
  /* height: 1.8175rem; */
  height: auto;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 2;
  border-radius: 0rem 0rem 0.75rem 0.75rem;
  background-color: #fafafa;
  position: absolute;
  top: 22.7rem;
  padding: 0 1.25rem 1.25rem 1.25rem;
  /* overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  } */
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
  white-space: nowrap;
`;

const StyledBookmarkIcon = styled(BookmarkIcon)<{ isBookmarked: boolean }>`
  position: absolute;
  top: 0;
  right: 1.1875rem;
  path {
    fill: ${(props) => (props.isBookmarked ? "#F53B36" : "#D0D0D0")};
    stroke: ${(props) => (props.isBookmarked ? "#F53B36" : "#D0D0D0")};
  }
`;
