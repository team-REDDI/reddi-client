import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  BrandDetailContainer,
  BrandStory,
  BrandName,
  BrandType,
  ContentBox,
  ContentType,
  DetailContainer,
  GoBackButton,
  LogoBox,
  LogoContainer,
  LogoImg,
  LogoImg2,
  NameBox,
  BrandExpBox,
  BrandExpTitle,
  BrandExpText,
  ContentBoxCol,
  MarketingCol,
} from "../styles/brandStyle";

import { MarketingBoxSmall } from "../components/Home/MarketingBoxSmall";
import {
  getBrandDetail,
  getBrandDetailInfo,
  getBrandDetailMarketing,
} from "../apis/brand";
import { getMarketingDetailInfo } from "../apis/marketing";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueries,
  UseQueryResult,
} from "react-query";
import { ReactComponent as Aesop } from "../assets/svgs/aesopSVG.svg";
import styled from "styled-components";
import { findIndustryTag } from "../utils/detailTagFunction";
import { findTagByType } from "../utils/detailTagFunction";
import NavBar from "../components/NavBar";
interface ContentBlock {
  type: string;
  heading_1?: {
    rich_text: { plain_text: string }[];
  };
  heading_2?: {
    rich_text: { plain_text: string }[];
  };
  paragraph?: {
    rich_text: { plain_text: string }[];
  };
  image?: {
    file: {
      url: string;
      expiry_time: string;
    };
    caption: string;
  };
  child_database?: {};
}

const queryClient = new QueryClient();

const BrandDetail = () => {
  const nav = useNavigate();
  const { id } = useParams<{ id: string }>();
  const brandId = id ? parseInt(id, 10) : 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    nav(-1);
  };

  const { data: brandDetailData } = useQuery(["brandDetail", brandId], () =>
    getBrandDetail(brandId),
  );

  const { data: brandDetailInfo } = useQuery(["brandDetailInfo", brandId], () =>
    getBrandDetailInfo(brandId),
  );

  //각 브랜드별 Marketing 레퍼런스 가져오기
  const { data: brandDetailMarketing } = useQuery(
    ["brandDetailMarketing", brandId],
    () => getBrandDetailMarketing(brandId),
  );

  const marketingDetailQueries = useQueries(
    brandDetailMarketing?.map((pageId: number) => {
      return {
        queryKey: ["marketingDetail", pageId],
        queryFn: () => getMarketingDetailInfo(pageId),
      };
    }) || [],
  );

  const renderMarketingDetails = () => {
    return marketingDetailQueries.map((query, index) => {
      if (!query.data) return <div key={index}></div>;
      const marketingDetail = query.data as any;
      return (
        <MarketingBoxSmall
          key={index}
          lank={null}
          id={marketingDetail.id}
          imgSrc={marketingDetail.cover_url}
          title={marketingDetail.title}
          expl={marketingDetail.subtitle}
        />
      );
    });
  };

  const industryTag = brandDetailInfo
    ? findIndustryTag(brandDetailInfo)
    : undefined;

  // 콘텐츠를 그룹화하는 로직
  // 각 'heading_1' 컨텐츠를 기준으로 그룹을 형성-> 배열 반환
  const groupedBlocks = (): ContentBlock[][] => {
    const groups: ContentBlock[][] = [];
    let currentGroup: ContentBlock[] = [];

    brandDetailData?.forEach((block: ContentBlock) => {
      if (block.type === "heading_1") {
        if (currentGroup.length) groups.push(currentGroup);
        currentGroup = [block];
      } else {
        currentGroup.push(block);
      }
    });

    if (currentGroup.length) groups.push(currentGroup);
    return groups;
  };

  //이제 그룹화된 부분에서 -> heading_1은 따로 빼고,
  // 그 외의 데이터들을 하나의 <div>로 넣어줌
  const renderGroupedContent = (group: ContentBlock[]): JSX.Element => {
    let groupedContents: JSX.Element[] = [];
    let isHeading1 = false;
    let firstHeading2 = true;
    return (
      <ContentBoxWrapper>
        {group.map((content, index) => {
          if (content.type === "heading_1") {
            if (isHeading1) {
              const renderedGroup = (
                <ContextTextGroup key={index} className="grouped-content">
                  {groupedContents}
                </ContextTextGroup>
              );
              groupedContents = [];
              isHeading1 = false;
              return (
                <>
                  {renderedGroup}
                  <ContentBox key={index}>
                    <ContentType>
                      {content.heading_1?.rich_text[0].plain_text}
                    </ContentType>
                  </ContentBox>
                </>
              );
            } else {
              isHeading1 = true;
              return (
                <ContentBox key={index}>
                  <ContentType>
                    {content.heading_1?.rich_text[0].plain_text}
                  </ContentType>
                </ContentBox>
              );
            }
          } else if (isHeading1) {
            switch (content.type) {
              case "heading_2":
                groupedContents.push(
                  <BrandExpTitle key={index} first={firstHeading2}>
                    {content.heading_2?.rich_text[0].plain_text}
                  </BrandExpTitle>,
                );
                firstHeading2 = false;
                break;
              case "paragraph":
                groupedContents.push(
                  content.paragraph &&
                    content.paragraph.rich_text.length > 0 ? (
                    <BrandExpText key={index}>
                      {content.paragraph.rich_text[0].plain_text}
                    </BrandExpText>
                  ) : (
                    <div key={index}></div>
                  ),
                );
                break;
              case "image":
                groupedContents.push(
                  content.image &&
                    content.image.file &&
                    content.image.file.url ? (
                    <img
                      key={index}
                      src={content.image.file.url}
                      width="449.4"
                      alt="브랜드 디테일 이미지"
                      style={{ marginBottom: "0.5rem" }} //임의로 추가
                    />
                  ) : (
                    <div key={index}></div>
                  ),
                );
                break;
              case "child_database":
                groupedContents.push(<div key={index}></div>);
                break;
            }
          }
          return null;
        })}
        {groupedContents.length > 0 && (
          <div className="grouped-content">{groupedContents}</div>
        )}
      </ContentBoxWrapper>
    );
  };

  // 전체 콘텐츠를 렌더링
  const renderAllContent = () => {
    const groups = groupedBlocks();
    return groups.map((group, index) => renderGroupedContent(group));
  };

  return (
    <BrandDetailContainer>
      <NavBar />
      <LogoContainer>
        <LogoBox>
          <LogoImg src={brandDetailInfo?.cover_url} />
          <NameBox>
            <BrandName>{brandDetailInfo?.name}</BrandName>
            <BrandType>{industryTag}</BrandType>
          </NameBox>
        </LogoBox>
      </LogoContainer>
      <DetailContainer>
        {renderAllContent()}
        <ContentBoxCol>
          <MarketingCol>{renderMarketingDetails()}</MarketingCol>
        </ContentBoxCol>
      </DetailContainer>
      <Footer />
    </BrandDetailContainer>
  );
};
const ContentBoxWrapper = styled.div`
  display: flex;
`;
const ContextTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default () => (
  <QueryClientProvider client={queryClient}>
    <BrandDetail />
  </QueryClientProvider>
);
