// 북마크 된 마케팅, 브랜드 컨텐츠 저장
import { colors } from "../../styles/colors";
import { SmallMarketingBox } from "../SmallMarketingBox";
import { BrandBox } from "../BrandBox";
import styled from "styled-components";
import {
  getBookmarkedBrand,
  getBookmarkedMarketing,
} from "../../apis/mypageAPI";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../utils/atom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
interface Marketing {
  id: number;
  name: string;
  brand_id: number;
  title: string;
  subtitle: string;
  description: string;
  postTags: {
    postTagType: string;
    tag: string;
  }[];
  cover_url: string;
  notion_page_url: string;
  notion_page_created_time: string;
  notion_page_last_edited_time: string;
}
interface Brand {
  id: number;
  name: string;
  brandTags: {
    brandTagType: string;
    tag: string;
  }[];
  cover_url: string;
  notion_page_url: string;
  notion_page_created_time: string;
  notion_page_last_edited_time: string;
}

export const BookmarkedContent = () => {
  const [accessToken] = useRecoilState(accessTokenState);

  const { data: marketingData } = useQuery(
    ["bookmarkedMarketing", accessToken],
    () => getBookmarkedMarketing(accessToken),
    {
      enabled: !!accessToken,
    },
  );

  const { data: brandData } = useQuery(
    ["bookmarkedBrand", accessToken],
    () => getBookmarkedBrand(accessToken),
    {
      enabled: !!accessToken,
    },
  );

  return (
    <div>
      <TitleText>마케팅</TitleText>
      <BoxContainer>
        {marketingData &&
          marketingData.map((marketing: Marketing) => (
            <SmallMarketingBox
              id={marketing.id}
              imgSrc={marketing.cover_url}
              type="PLACE"
              title={marketing.title}
              expl={marketing.subtitle}
              read={1} //화면에 안 나오기 때문에 그냥 임시 값 넣었음
              categories={marketing.postTags.map((tag) => tag.tag)}
            />
          ))}
      </BoxContainer>
      <TitleText>브랜드</TitleText>
      <BoxContainer>
        {brandData &&
          brandData.map((box: Brand, index: number) => (
            <BrandBox
              bookmarkOff={true}
              key={index}
              id={box.id}
              imgSrc={box.cover_url}
              brandName={box.name}
              tags={box.brandTags.map((tag) => tag.tag)}
            />
          ))}
      </BoxContainer>
    </div>
  );
};
const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5rem 1.5rem;
  margin-bottom: 6.25rem;
`;
const TitleText = styled.div`
  width: 64rem;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
  color: ${colors.red};
  margin-bottom: 2.06rem;
  text-align: start;
`;
