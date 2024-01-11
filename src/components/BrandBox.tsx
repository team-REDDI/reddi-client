import { useNavigate } from "react-router-dom";
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
  tag: string;
}

export const BrandBox = ({ imgSrc, brandName, location, tag }: BrandProps) => {
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
        <BrandTags>{tag}</BrandTags>
      </BrandTextBox>
    </RefBox>
  );
};
