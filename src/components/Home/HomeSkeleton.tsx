import styled from "styled-components";
import { colors } from "../../styles/colors";
import {
  BrandTitleRow,
  MarketingContainer,
  MarketingLine,
  MarketingTitleBox,
  SkeletonTitle,
} from "../../styles/HomeStyle";
import { MarketingSkeleton } from "../MarketingSkeleton";

export const HomeSkeleton = () => {
  return (
    <>
      <MarketingContainer>
        <MarketingTitleBox>
          <BrandTitleRow>
            <SkeletonTitle />
          </BrandTitleRow>
        </MarketingTitleBox>
        <MarketingLine>
          <MarketingSkeleton />
        </MarketingLine>
      </MarketingContainer>
      <MarketingContainer>
        <MarketingTitleBox>
          <BrandTitleRow>
            <SkeletonTitle />
          </BrandTitleRow>
        </MarketingTitleBox>
        <MarketingLine>
          <MarketingSkeleton />
        </MarketingLine>
      </MarketingContainer>
      <MarketingContainer>
        <MarketingTitleBox>
          <BrandTitleRow>
            <SkeletonTitle />
          </BrandTitleRow>
        </MarketingTitleBox>
        <MarketingLine>
          <MarketingSkeleton />
        </MarketingLine>
      </MarketingContainer>
    </>
  );
};
