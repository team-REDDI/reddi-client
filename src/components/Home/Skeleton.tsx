import styled from "styled-components";
import { colors } from "../../styles/colors";
import {
  BrandTitleRow,
  MarketingContainer,
  MarketingLine,
  MarketingTitleBox,
  SkeletonBox,
  SkeletonContainer,
  SkeletonExp1,
  SkeletonExp2,
  SkeletonTitle,
  SkeletonType,
} from "../../styles/HomeStyle";

export const Skeleton = () => {
  return (
    <MarketingContainer>
      <MarketingTitleBox>
        <BrandTitleRow>
          <SkeletonTitle />
        </BrandTitleRow>
      </MarketingTitleBox>
      <MarketingLine>
        <SkeletonContainer>
          <SkeletonBox />
          <SkeletonType />
          <SkeletonExp1 />
          <SkeletonExp2 style={{ marginBottom: 31 }} />
          <SkeletonExp2 />
        </SkeletonContainer>
        <SkeletonContainer>
          <SkeletonBox />
          <SkeletonType />
          <SkeletonExp1 />
          <SkeletonExp2 style={{ marginBottom: 31 }} />
          <SkeletonExp2 />
        </SkeletonContainer>
        <SkeletonContainer>
          <SkeletonBox />
          <SkeletonType />
          <SkeletonExp1 />
          <SkeletonExp2 style={{ marginBottom: 31 }} />
          <SkeletonExp2 />
        </SkeletonContainer>
      </MarketingLine>
    </MarketingContainer>
  );
};
