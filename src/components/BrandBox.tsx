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

interface BrandProps {
  id: number;
  imgSrc: string;
  brandName: string;
  tags: string[];
}

export const BrandBox = ({ id, imgSrc, brandName, tags }: BrandProps) => {
  const nav = useNavigate();

  const goToBrandDetail = () => {
    nav(`/brand/detail/${id}`);
  };

  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = imgSrc;
    image.onload = () => {
      setIsLandscape(image.width > image.height);
    };
  }, [imgSrc]);

  return (
    <RefBox onClick={goToBrandDetail}>
      <BrandImage src={imgSrc} alt={brandName} isLandscape={isLandscape} />
      <BrandTextBox>
        <BrandNameText>{brandName}</BrandNameText>
        <BrandTagsContainer>
          {tags.map((tag, index) => (
            <BrandTag key={index}>{tag}</BrandTag>
          ))}
        </BrandTagsContainer>
      </BrandTextBox>
    </RefBox>
  );
};
const BrandTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  gap: 0.34rem;
`;

const BrandTag = styled.div`
  color: ${colors.red};
  background-color: ${colors.light_red};
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-weight: 500;
`;

const BrandImage = styled.img<{ isLandscape: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.isLandscape ? "6.8125rem" : "auto")};
  height: ${(props) => (props.isLandscape ? "auto" : "5.9375rem")};
  object-fit: cover;
  object-position: center;
`;
