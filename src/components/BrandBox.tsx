import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as Toss } from "../assets/svgs/toss_2.svg";
import {
  BrandLocation,
  BrandNameText,
  BrandTags,
  BrandTextBox,
  RefBox,
} from "../styles/brandStyle";

interface BrandProps {
  imgSrc: string;
  brandName: string;
  tags: string[];
}

export const BrandBox = ({ imgSrc, brandName, tags }: BrandProps) => {
  const nav = useNavigate();

  const goToBrandDetail = () => {
    nav("/brand/detail/0");
  };

  return (
    <RefBox onClick={goToBrandDetail}>
      <BrandImage src={imgSrc} alt={brandName} />
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
  /* color: ${colors.red}; */
  /* background-color: ${colors.light_red}; */
  color: ${colors.black_CTA};
  background-color: ${colors.tag_grey};
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-weight: 500;
`;

const BrandImage = styled.img`
  width: 6.8125rem;
  height: 5.9375rem;
`;
