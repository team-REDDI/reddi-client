import styled from "styled-components";
import { colors } from "../styles/colors";
import {
  BrandTitleRow,
  MarketingContainer,
  MarketingLine,
  MarketingTitleBox,
  SkeletonBox,
  SkeletonContainer,
  SkeletonExp1,
  SkeletonExp2,
  SkeletonExp3,
  SkeletonExp4,
  SkeletonExp5,
  SkeletonLine,
  SkeletonTextBox,
  SkeletonTitle,
  SkeletonType,
} from "../styles/HomeStyle";

export const MarketingSkeleton = () => {
  return (
    <>
      <SkeletonContainer>
        <SkeletonBox />
        <SkeletonTextBox>
          <SkeletonType />
          <SkeletonExp1 />
          <SkeletonExp2 />
          <SkeletonLine>
            <SkeletonExp3 />
            <SkeletonExp4 />
            <SkeletonExp5 />
          </SkeletonLine>
        </SkeletonTextBox>
      </SkeletonContainer>
      <SkeletonContainer>
        <SkeletonBox />
        <SkeletonTextBox>
          <SkeletonType />
          <SkeletonExp1 />
          <SkeletonExp2 />
          <SkeletonLine>
            <SkeletonExp3 />
            <SkeletonExp4 />
            <SkeletonExp5 />
          </SkeletonLine>
        </SkeletonTextBox>
      </SkeletonContainer>
      <SkeletonContainer>
        <SkeletonBox />
        <SkeletonTextBox>
          <SkeletonType />
          <SkeletonExp1 />
          <SkeletonExp2 />
          <SkeletonLine>
            <SkeletonExp3 />
            <SkeletonExp4 />
            <SkeletonExp5 />
          </SkeletonLine>
        </SkeletonTextBox>
      </SkeletonContainer>
    </>
  );
};
