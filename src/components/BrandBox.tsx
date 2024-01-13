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
  location: string;
  tags: string[];
}

export const BrandBox = ({ imgSrc, brandName, location, tags }: BrandProps) => {
  const nav = useNavigate();

  const goToBrandDetail = () => {
    nav("/brand/detail/0");
  };

  return (
    <RefBox onClick={goToBrandDetail}>
      <Toss />
      <BrandTextBox>
        <BrandNameText>{brandName}</BrandNameText>
        <BrandLocation>{location}</BrandLocation>
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
  margin-top: 0.5rem;
`;

const BrandTag = styled.div`
  color: ${colors.red};
  background-color: ${colors.light_red};
  padding: 0.5rem 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  margin-right: 0.34rem;
`;
