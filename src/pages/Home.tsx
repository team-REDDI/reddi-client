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

const queryClient = new QueryClient();

const Home = () => {
  interface TopBrand {
    id: number;
    name: string;
    view_count: number;
    brandTags: [brandTagType: string, tag: string];
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
    postTags: [postTagType: string, tag: string];
    cover_url: string;
    notion_page_url: string;
    notion_page_created_time: string;
    notion_page_laseted_edited_time: string;
  }

  useEffect(() => {
    getHomePost();
  }, []);

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

  const [homePostList, setHomePostList] = useState<TopMarketing[]>();
  const { data: HotPostData } = useQuery(
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
          {/* <BrandLankBox lank={1} name="토스 증권" Icon={TossIcon} />
          <GreyLine />
          <BrandLankBox lank={2} name="네이버" Icon={NaverIcon} />
          <GreyLine />
          <BrandLankBox lank={3} name="현대카드" Icon={HyundaiIcon} />
          <GreyLine />
          <BrandLankBox lank={4} name="젠틀몬스터" Icon={GentleIcon} />
          <GreyLine />  
          <BrandLankBox lank={5} name="나이키" Icon={NikeIcon} /> */}
          {hotBrand &&
            hotBrand.map((data, index) => (
              <>
                <BrandLankBox
                  lank={index + 1}
                  name={data.name}
                  Icon={data.cover_url}
                />
                {index < 4 ? <GreyLine /> : null}
              </>
            ))}
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

      <MarketingContainer>
        <MarketingTitleBox>
          <BrandTitleRow>
            <HomeTitle>
              크리스마스에 눈이 온다면? 크리스마스 공간 기획
            </HomeTitle>
          </BrandTitleRow>
        </MarketingTitleBox>
        <MarketingLine>
          <MarketingBox
            id={1}
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
            expl="유럽 어느 골목을 들어와있는 듯한 착각"
            read={727}
            categories={["부티크", "팝업스토어", "콘셉트마케팅"]}
          />
          <MarketingBox
            id={1}
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="신세계 백화점의 
          ‘MAGIC WINTER FANTASY’"
            expl="3분을 위한 9개월의 여정"
            read={1928}
            categories={["부티크", "팝업스토어", "콘셉트마케팅"]}
          />
          <MarketingBox
            id={1}
            imgSrc="../assets/images/exemple.png"
            type="PLACE"
            title="시몬스테라스의 ‘크리스마스 일루미네이션"
            expl="동화 속 마을로 단장한 시몬스"
            read={567}
            categories={["부티크", "팝업스토어", "콘셉트마케팅"]}
          />
        </MarketingLine>
      </MarketingContainer>
      <Footer />
    </HomeContainer>
  );
};

export default () => (
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);
