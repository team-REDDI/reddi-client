import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/colors";
import {
  BrandLocation,
  BrandNameText,
  BrandTags,
  BrandTextBox,
  RefBox,
} from "../styles/brandStyle";
import { useEffect, useState } from "react";
import { ReactComponent as BookmarkIcon } from "../assets/svgs/brandBookmark.svg";

interface BrandProps {
  id: number;
  imgSrc: string;
  brandName: string;
  tags: string[];
  bookmarkOff?: boolean;
}

export const BrandBox = ({
  id,
  imgSrc,
  brandName,
  tags,
  bookmarkOff,
}: BrandProps) => {
  const nav = useNavigate();
  const [showAllCategories, setShowAllCategories] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const goToBrandDetail = () => {
    nav(`/brand/detail/${id}`);
  };

  const [isLandscape, setIsLandscape] = useState(false);
  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  useEffect(() => {
    const image = new Image();
    image.src = imgSrc;
    image.onload = () => {
      setIsLandscape(image.width > image.height);
    };
  }, [imgSrc]);

  return (
    <RefBox>
      <BrandImage
        src={imgSrc}
        alt={brandName}
        isLandscape={isLandscape}
        onClick={goToBrandDetail}
      />
      <BrandTextBox>
        <BrandNameText onClick={goToBrandDetail}>{brandName}</BrandNameText>
        {bookmarkOff ? null : (
          <StyledBookmarkIcon
            onClick={toggleBookmark}
            isBookmarked={isBookmarked}
          />
        )}
        <BrandTagsContainer onClick={toggleCategories}>
          {tags
            .slice(0, showAllCategories ? tags.length : 3)
            .map((category, index) => (
              <BrandTag key={index}>{category}</BrandTag>
            ))}
          {tags.length > 3 && (
            <PlusButton>{showAllCategories ? "x" : "+"}</PlusButton>
          )}
        </BrandTagsContainer>
      </BrandTextBox>
    </RefBox>
  );
};
const BrandTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 0.5rem;
  gap: 0.34rem;
  height: 2.312rem;
  overflow-x: auto;
  overflow-y: hidden;
  z-index: 99;
`;

const BrandTag = styled.div`
  color: ${colors.red};
  background-color: ${colors.light_red};
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
`;

const BrandImage = styled.img<{ isLandscape: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.isLandscape ? "5.625rem" : "auto")};
  height: ${(props) => (props.isLandscape ? "auto" : "5.9375rem")};
  object-fit: cover;
  object-position: center;
`;
const PlusButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  color: ${colors.red};
  background-color: ${colors.light_red};
`;

const StyledBookmarkIcon = styled(BookmarkIcon)<{ isBookmarked: boolean }>`
  position: absolute;
  top: 0;
  right: 0;

  path {
    fill: ${(props) => (props.isBookmarked ? "#B9B9B9" : "white")};
    stroke: ${(props) => (props.isBookmarked ? "#B9B9B9" : "#B9B9B9")};
  }
`;
