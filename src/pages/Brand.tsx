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

import { BrandBox } from "../components/BrandBox";
import { ReactComponent as BrandSVG } from "../assets/svgs/BrandSVG.svg";
import { useRecoilValue } from "recoil";
import { filteredBrand } from "../utils/atom";
import { getBrandList } from "../apis/brand";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

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
  const selectedFilters = useRecoilValue(filteredBrand);

  const {
    data: brandInfo,
    isLoading,
    isError,
  } = useQuery("brandInfo", getBrandList);

  const brandBoxes =
    brandInfo?.data?.map((brand: Brand) => ({
      imgSrc: brand.cover_url,
      brandName: brand.name,
      tags: brand.brandTags.map((brandTag) => brandTag.tag),
    })) || [];

  const filteredBoxes =
    selectedFilters.size > 0
      ? brandBoxes.filter((box: { tags: string[] }) =>
          box.tags.some((tag) => selectedFilters.has(tag)),
        )
      : brandBoxes;

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
          {filteredBoxes.map(
            (
              box: { imgSrc: string; brandName: string; tags: string[] },
              index: number,
            ) => (
              <BrandBox
                key={index}
                imgSrc={box.imgSrc}
                brandName={box.brandName}
                tags={box.tags}
              />
            ),
          )}
        </BrandContainer>
      </ReferenceBox>
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

export default () => (
  <QueryClientProvider client={queryClient}>
    <Brand />
  </QueryClientProvider>
);
