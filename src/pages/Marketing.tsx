import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Filter from "../components/Filter";
import { BrandTitleRow, HomeTitle, MarketingLine } from "../styles/HomeStyle";
import { MarketingBox } from "../components/MarketingBox";
import dropdownDataMarketing from "../assets/datas/dropDownDataMarketing.json";
import Footer from "../components/Footer";
import {
  accessTokenState,
  bookmarkedMarketingIdsState,
  filteredMarketing,
} from "../utils/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { ReactComponent as MarketingSVG } from "../assets/svgs/MarketingSVG.svg";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  UseQueryResult,
} from "react-query";
import { useState, useEffect } from "react";
import { getMarketingList } from "../apis/marketing";
import { findTagByType } from "../utils/detailTagFunction";
import { useSearchParams } from "react-router-dom";
import { MarketingSkeleton } from "../components/MarketingSkeleton";
import { getBookmarkedMarketing } from "../apis/mypageAPI";

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

const queryClient = new QueryClient();

const Marketing = () => {
  const [accessToken] = useRecoilState(accessTokenState);
  const selectedFilters = useRecoilValue(filteredMarketing);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [bookmarkedMarketingIds, setBookmarkedMarketingIds] = useRecoilState(
    bookmarkedMarketingIdsState,
  );

  useEffect(() => {
    setCurrentPage(pageFromUrl);
    window.scrollTo(0, 0);
  }, [pageFromUrl]);

  const changePage = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
  };

  useEffect(() => {
    const fetchBookmarkedPosts = async () => {
      try {
        const data = await getBookmarkedMarketing(accessToken);

        // data가 undefined인 경우에 대한 체크 추가
        if (data) {
          const ids = data.map((post: any) => post.id);
          setBookmarkedMarketingIds(ids);
          // console.log("bookmarkedMarketingIds:", ids);
        }
      } catch (error) {
        console.error("Error fetching bookmarked marketing posts:", error);
      }
    };
    fetchBookmarkedPosts();
  }, [accessToken]);
  const {
    data: marketingInfo,
    isLoading,
  }: UseQueryResult<Marketing[], unknown> = useQuery(
    ["marketingInfo", currentPage - 1],
    () => getMarketingList({ page: currentPage - 1, size: 9 }),
  );

  const marketingBoxes =
    marketingInfo?.map((marketing: Marketing) => {
      const tag = findTagByType(marketing.postTags, "산업");

      return {
        id: marketing.id,
        imgSrc: marketing.cover_url,
        title: marketing.title,
        read: 124,
        type: tag,
        expl: marketing.subtitle,
        categories: marketing.postTags.map((postTag) => postTag.tag),
      };
    }) || [];

  //필터링에 사용되기 위한 모든 info 가져오는 쿼리 추가
  const { data: allMarketingInfo }: UseQueryResult<Marketing[], unknown> =
    useQuery(["allMarketingInfo"], () =>
      getMarketingList({ page: 0, size: 100 }),
    );

  const allMarketingBoxes =
    allMarketingInfo?.map((marketing: Marketing) => {
      const tagType = "산업군";
      const tag = findTagByType(marketing.postTags, "산업");

      return {
        id: marketing.id,
        imgSrc: marketing.cover_url,
        title: marketing.title,
        read: 124,
        type: tag,
        expl: marketing.subtitle,
        categories: marketing.postTags.map((postTag) => postTag.tag),
      };
    }) || [];
  const filteredBoxes =
    selectedFilters.size > 0
      ? allMarketingBoxes.filter((box) =>
          Array.from(selectedFilters).every((filter) =>
            box.categories.includes(filter),
          ),
        )
      : marketingBoxes;

  const totalPageNum = 4; //일단 임시로

  return (
    <MarketingPageContainer>
      <NavBar />
      <Header
        title="마케팅"
        subtitle="좋은 마케팅이 있었기에 좋은 브랜드가 될 수 있었다. 고객에게 매력적으로 다가갈 수 있었던 브랜드의 마케팅 레퍼런스를 레디에서 만나보세요."
        ImageComponent={MarketingSVG}
      />
      <Filter dropdownItems={dropdownDataMarketing} pageType="marketing" />
      <ReferenceBox>
        <BrandTitleRow>
          <HomeTitle>마케팅 레퍼런스</HomeTitle>
        </BrandTitleRow>
        <MarketingLines>
          {isLoading ? (
            <>
              <MarketingSkeleton />
              <MarketingSkeleton />
              <MarketingSkeleton />
            </>
          ) : (
            filteredBoxes.map((box, index) => (
              <MarketingBox
                id={box.id}
                key={index}
                imgSrc={box.imgSrc}
                type={box.type}
                title={box.title}
                expl={box.expl}
                read={box.read}
                categories={box.categories}
                isBookmarked={bookmarkedMarketingIds.includes(box.id)}
              />
            ))
          )}
        </MarketingLines>
      </ReferenceBox>
      <PageButtonContainer>
        {Array.from({ length: totalPageNum }, (_, index) => index + 1).map(
          (page) => (
            <PageButton
              key={page}
              onClick={() => changePage(page)}
              isCurrent={page === currentPage}
            >
              {page}
            </PageButton>
          ),
        )}
        {currentPage < totalPageNum && (
          <NextPageButton onClick={() => setCurrentPage(currentPage + 1)}>
            다음
          </NextPageButton>
        )}
      </PageButtonContainer>
      <Footer />
    </MarketingPageContainer>
  );
};

const MarketingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReferenceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.25rem;
  width: 64rem;
  box-sizing: border-box;
  /* width: 100%;
  padding-left: 10.69rem;
  padding-right: 10.69rem; */
`;
export const MarketingLines = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* width: 100%; */
  width: 64rem;
  flex-wrap: wrap;
  /* justify-content: flex-start; */
  /* align-items: flex-start; */
  gap: 2.5rem 1.5rem;
  margin-top: 2.5rem;
`;

interface pageButtonProps {
  isCurrent: boolean;
}
const PageButtonContainer = styled.div`
  display: flex;
  gap: 1.56rem;
  margin-top: 6.25rem;
`;

const PageButton = styled.button<pageButtonProps>`
  background: none;
  cursor: pointer;
  border: none;
  color: ${(props) => (props.isCurrent ? "#000" : "#bbb")};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 1.3rem */
  letter-spacing: -0.01rem;
`;

const NextPageButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  color: #bbb;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 1.3rem */
  letter-spacing: -0.01rem;
`;
export default () => (
  <QueryClientProvider client={queryClient}>
    <Marketing />
  </QueryClientProvider>
);
