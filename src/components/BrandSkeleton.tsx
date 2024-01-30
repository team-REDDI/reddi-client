import styled from "styled-components";
import { colors } from "../styles/colors";
import { SkeletonContainer } from "../styles/HomeStyle";

export const BrandSkeleton = () => {
  return (
    <>
      <BrandSkeletonContainer>
        <BrandSkeletonLine>
          <BrandSkeletonBox />
          <BrandSkeletonBox />
        </BrandSkeletonLine>
        <BrandSkeletonLine>
          <BrandSkeletonBox />
          <BrandSkeletonBox />
        </BrandSkeletonLine>
        <BrandSkeletonLine>
          <BrandSkeletonBox />
          <BrandSkeletonBox />
        </BrandSkeletonLine>
        <BrandSkeletonLine>
          <BrandSkeletonBox />
          <BrandSkeletonBox />
        </BrandSkeletonLine>
        <BrandSkeletonLine>
          <BrandSkeletonBox />
          <BrandSkeletonBox />
        </BrandSkeletonLine>
      </BrandSkeletonContainer>
    </>
  );
};

const BrandSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BrandSkeletonLine = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const BrandSkeletonBox = styled.div`
  display: flex;
  width: 31.25rem;
  height: 9.44119rem;
  padding: 1.875rem 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.75rem;
  /* border: 0.5px solid #eaeaea; */
  background: ${colors.background_gray};
`;
