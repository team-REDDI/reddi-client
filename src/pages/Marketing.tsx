import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Filter from "../components/Filter";
import { BrandTitleRow, HomeTitle, MarketingLine } from "../styles/HomeStyle";
import { MarketingBox } from "../components/MarketingBox";
import dropdownDataMarketing from "../assets/datas/dropDownDataMarketing.json";
import Footer from "../components/Footer";
import { filteredMarketing } from "../utils/atom";
import { useRecoilValue } from "recoil";
import { ReactComponent as MarketingSVG } from "../assets/svgs/MarketingSVG.svg";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  UseQueryResult,
} from "react-query";
import { useState, useEffect } from "react";
import { getMarketingList } from "../apis/marketing";

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
  const selectedFilters = useRecoilValue(filteredMarketing);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const { data: marketingInfo }: UseQueryResult<Marketing[], unknown> =
    useQuery(["marketingInfo", currentPage - 1], () =>
      getMarketingList({ page: currentPage - 1, size: 9 }),
    );

  const marketingBoxes =
    marketingInfo?.map((marketing: Marketing) => ({
      id: marketing.id,
      imgSrc: marketing.cover_url,
      title: marketing.title,
      read: 124,
      type: marketing.description,
      expl: marketing.subtitle,
      categories: marketing.postTags.map((postTag) => postTag.tag),
    })) || [];

  //필터링에 사용되기 위한 모든 info 가져오는 쿼리 추가
  const { data: allMarketingInfo }: UseQueryResult<Marketing[], unknown> =
    useQuery(["allMarketingInfo"], () =>
      getMarketingList({ page: 0, size: 100 }),
    );

  const allMarketingBoxes =
    allMarketingInfo?.map((marketing: Marketing) => ({
      id: marketing.id,
      imgSrc: marketing.cover_url,
      title: marketing.title,
      read: 124,
      type: marketing.description,
      expl: marketing.subtitle,
      categories: marketing.postTags.map((postTag) => postTag.tag),
    })) || [];

  const filteredBoxes =
    selectedFilters.size > 0
      ? allMarketingBoxes.filter((box) =>
          box.categories.some((category) => selectedFilters.has(category)),
        )
      : marketingBoxes;

  const totalPageNum = 3; //일단 임시로

  return (
    <MarketingPageContainer>
      <NavBar />
      <Header
        title="마케팅"
        subtitle="마케팅 레퍼런스들을 보여주는 페이지입니다. (짧은 페이지 설명)"
        ImageComponent={MarketingSVG}
      />
      <Filter dropdownItems={dropdownDataMarketing} pageType="marketing" />
      <ReferenceBox>
        <BrandTitleRow>
          <HomeTitle>마케팅 레퍼런스</HomeTitle>
        </BrandTitleRow>
        <MarketingLines>
          {filteredBoxes.map((box, index) => (
            <MarketingBox
              id={box.id}
              key={index}
              imgSrc={box.imgSrc}
              type={box.type}
              title={box.title}
              expl={box.expl}
              read={box.read}
              categories={box.categories}
            />
          ))}
        </MarketingLines>
      </ReferenceBox>
      <PageButtonContainer>
        {Array.from({ length: totalPageNum }, (_, index) => index + 1).map(
          (page) => (
            <PageButton
              key={page}
              onClick={() => setCurrentPage(page)}
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
const MarketingLines = styled.div`
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
