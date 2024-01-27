import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Filter from "../components/Filter";
import dropdownDataBrand from "../assets/datas/dropDownDataBrand.json";
import Footer from "../components/Footer";
import { BrandTitleRow, HomeTitle } from "../styles/HomeStyle";
import {
  RefBox,
  BrandContainer,
  BrandLocation,
  BrandNameText,
  BrandTags,
  BrandTextBox,
} from "../styles/brandStyle";
import { useState, useEffect } from "react";
import { BrandBox } from "../components/BrandBox";
import { ReactComponent as BrandSVG } from "../assets/svgs/BrandSVG.svg";
import { useRecoilValue } from "recoil";
import { filteredBrand } from "../utils/atom";
import { getBrandList } from "../apis/brand";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  UseQueryResult,
} from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BrandSkeleton } from "../components/BrandSkeleton";

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

const queryClient = new QueryClient();

const Brand = () => {
  const navigate = useNavigate();
  const selectedFilters = useRecoilValue(filteredBrand);
  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  useEffect(() => {
    setCurrentPage(pageFromUrl);
    window.scrollTo(0, 0);
  }, [pageFromUrl]);

  const {
    data: brandInfo,
    isLoading,
    isError,
  }: UseQueryResult<Brand[], unknown> = useQuery(
    ["brandInfo", currentPage - 1],
    () => getBrandList({ page: currentPage - 1, size: 10 }),
  );
  const { data: allBrandInfo }: UseQueryResult<Brand[], unknown> = useQuery(
    ["allBrandInfo"],
    () => getBrandList({ page: 0, size: 100 }),
  );

  const brandBoxes =
    brandInfo?.map((brand: Brand) => ({
      id: brand.id,
      imgSrc: brand.cover_url,
      brandName: brand.name,
      tags: brand.brandTags.map((brandTag) => brandTag.tag),
    })) || [];

  const allBrandBoxes =
    allBrandInfo?.map((brand: Brand) => ({
      id: brand.id,
      imgSrc: brand.cover_url,
      brandName: brand.name,
      tags: brand.brandTags.map((brandTag) => brandTag.tag),
    })) || [];

  const filteredBoxes =
    selectedFilters.size > 0
      ? allBrandBoxes.filter((box: { tags: string[] }) =>
          Array.from(selectedFilters).every((filter) =>
            box.tags.includes(filter),
          ),
        )
      : brandBoxes;

  const changePage = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
  };

  const totalPageNum = 4; //일단 임시로

  return (
    <BrandPageContainer>
      <NavBar />
      <Header
        title="브랜드"
        subtitle="브랜드 레퍼런스들을 보여주는 페이지입니다. (짧은 페이지 설명)"
        ImageComponent={BrandSVG}
      />
      <Filter dropdownItems={dropdownDataBrand} pageType="brand" />
      <ReferenceBox>
        <BrandTitleRow>
          <HomeTitle>브랜드 레퍼런스</HomeTitle>
        </BrandTitleRow>
        <BrandContainer>
          {isLoading ? (
            <BrandSkeleton />
          ) : (
            filteredBoxes.map(
              (
                box: {
                  id: number;
                  imgSrc: string;
                  brandName: string;
                  tags: string[];
                },
                index: number,
              ) => (
                <BrandBox
                  key={index}
                  id={box.id}
                  imgSrc={box.imgSrc}
                  brandName={box.brandName}
                  tags={box.tags}
                />
              ),
            )
          )}
        </BrandContainer>
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
    </BrandPageContainer>
  );
};

const BrandPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReferenceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6.25rem;
  width: 64rem;
  /* width: 100%; */
  /* padding-left: 10.69rem; */
  /* padding-right: 10.69rem; */
  box-sizing: border-box;
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
    <Brand />
  </QueryClientProvider>
);
