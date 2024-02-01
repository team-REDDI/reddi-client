import NavBar from "../components/NavBar";
import { ReactComponent as TossIcon } from "../assets/svgs/tossIcon.svg";
import { ReactComponent as NaverIcon } from "../assets/svgs/naverIcon.svg";
import { ReactComponent as HyundaiIcon } from "../assets/svgs/hyundaiIcon.svg";
import { ReactComponent as GentleIcon } from "../assets/svgs/gentleIcon.svg";
import { ReactComponent as NikeIcon } from "../assets/svgs/nikeIcon.svg";
import {
  HomeContainer,
  BrandTitleBox,
  HomeTitle,
  BrandTitleRow,
  DateText,
  MarketingTitleBox,
  GreyLine,
  LankBox,
  BrandLankContainer,
  MarketingContainer,
  MarketingLine,
  MarketingCol,
  SkeletonBox,
  SkeletonTitle,
  SkeletonExp1,
  SkeletonExp2,
  SkeletonContainer,
  SkeletonType,
} from "../styles/HomeStyle";
import { BrandLankBox } from "../components/Home/BrandLank";
import { MarketingBox } from "../components/MarketingBox";
import { MarketingBoxSmall } from "../components/Home/MarketingBoxSmall";
import Footer from "../components/Footer";
import RandomBanner from "../components/Home/RandomBanner";
import RandomMainBanner from "../components/Home/RandomMainBanner";
import { useEffect, useState } from "react";
import { getHomePost, getHotBrand, getHotPost } from "../apis/homeAPI";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { findIndustryTag } from "../utils/detailTagFunction";
import { findTagByType } from "../utils/detailTagFunction";
import { MarketingSkeleton } from "../components/MarketingSkeleton";
import { HomeSkeleton } from "../components/Home/HomeSkeleton";

const queryClient = new QueryClient();

const Home = () => {
  interface BrandTag {
    brandTagType: string;
    tag: string;
  }

  interface PostTag {
    postTagType: string;
    tag: string;
  }

  interface TopBrand {
    id: number;
    name: string;
    view_count: number;
    brandTags: BrandTag[];
    cover_url: string;
    notion_page_url: string;
    notion_page_created_time: string;
    notion_page_laseted_edited_time: string;
  }

  interface TopMarketing {
    id: number;
    brand_id: number;
    title: string;
    subtitle: string;
    description: string;
    view_count: number;
    postTags: PostTag[];
    cover_url: string;
    notion_page_url: string;
    notion_page_created_time: string;
    notion_page_laseted_edited_time: string;
  }

  interface HomePost {
    curation_title: string;
    posts: [
      {
        id: number;
        brand_id: number;
        title: string;
        subtitle: string;
        descriptioin: string;
        view_count: number;
        postTags: PostTag[];
        cover_url: string;
        notion_page_url: string;
        notion_page_created_time: string;
        notion_page_laseted_edited_time: string;
      },
    ];
  }

  const [hotBrand, setHotBrand] = useState<TopBrand[]>([]);

  const { data: HotBrandList } = useQuery(
    ["HotBrand"],
    () => getHotBrand({ n: 5 }),
    {
      onSuccess: (data) => {
        setHotBrand(data);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  const industryTags = hotBrand.map((brand) => {
    const industryTag = brand.brandTags.find(
      (tag: BrandTag) => tag.brandTagType === "산업군",
    );
    console.log("industry Tag", industryTag);
    return industryTag ? industryTag.tag : null;
  });

  const [hotMarketing, setHotMarketing] = useState<TopMarketing[]>();
  const { data: HotMarketing } = useQuery(
    ["HotBrandList"],
    () => getHotPost({ n: 6 }),
    {
      onSuccess: (data) => {
        setHotMarketing(data);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  const [homePostList, setHomePostList] = useState<HomePost[]>();
  const { data: HomePostData, isLoading } = useQuery(
    ["HomePostList"],
    () => getHomePost(),
    {
      onSuccess: (data) => {
        setHomePostList(data);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  return (
    <HomeContainer>
      <NavBar />

      <RandomMainBanner />

      <BrandLankContainer>
        <BrandTitleBox>
          <BrandTitleRow>
            <HomeTitle>HOT 브랜드 순위</HomeTitle>
          </BrandTitleRow>
          <DateText>2024. 02</DateText>
        </BrandTitleBox>
        <LankBox>
          {hotBrand &&
            hotBrand.map((data, index) => {
              const industryTag =
                data.brandTags.find((tag) => tag.brandTagType === "산업군")
                  ?.tag || "Unknown";
              return (
                <>
                  <BrandLankBox
                    id={data.id}
                    lank={index + 1}
                    name={data.name}
                    Icon={data.cover_url}
                    industry={industryTag}
                  />
                  {index < 4 ? <GreyLine /> : null}
                </>
              );
            })}
        </LankBox>
      </BrandLankContainer>

      <MarketingContainer>
        <MarketingTitleBox>
          <BrandTitleRow>
            <HomeTitle>HOT 마케팅 순위</HomeTitle>
          </BrandTitleRow>
        </MarketingTitleBox>
        <MarketingCol>
          {hotMarketing &&
            hotMarketing.map((data, index) => (
              <>
                <MarketingBoxSmall
                  id={data.id}
                  lank={index + 1}
                  imgSrc={data.cover_url}
                  title={data.title}
                  expl={data.subtitle}
                />
              </>
            ))}
        </MarketingCol>
      </MarketingContainer>

      <RandomBanner />

      {isLoading ? (
        <>
          <HomeSkeleton />
        </>
      ) : (
        homePostList &&
        homePostList.map((data, index) => (
          <MarketingContainer>
            <MarketingTitleBox>
              <BrandTitleRow>
                <HomeTitle>{data.curation_title}</HomeTitle>
              </BrandTitleRow>
            </MarketingTitleBox>
            <MarketingLine>
              {data.posts.map((post, index) => (
                <MarketingBox
                  id={post.id}
                  imgSrc={post.cover_url}
                  type={findTagByType(post.postTags, "산업")}
                  title={post.title}
                  expl={post.subtitle}
                  read={post.view_count}
                  categories={post.postTags.map((list) => list.tag)}
                  bookmarkOff={true}
                  isBookmarked={false}
                />
              ))}
            </MarketingLine>
          </MarketingContainer>
        ))
      )}
      <Footer />
    </HomeContainer>
  );
};

export default () => (
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);
