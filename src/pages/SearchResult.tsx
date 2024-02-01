import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  BrandResultBox,
  BrandsBox,
  MarketingResultBox,
  MarketingsBox,
  ResultBox,
  ResultContainer,
  ResultText,
  ResultTitle,
} from "../styles/searchStyle";
import { MarketingBox } from "../components/MarketingBox";
import { BrandBox } from "../components/BrandBox";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSearchResult } from "../apis/searchAPI";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { MarketingLines } from "./Marketing";

const SearchResult = () => {
  const [params, setParams] = useSearchParams();
  const inputValue = params.get("input");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [inputValue]);

  interface ResultList {
    brands: BrandList[];
    posts: MarketingList[];
  }

  interface BrandList {
    id: number;
    name: string;
    brandTags: [{ brandTagType: string; tag: string }];
    coverUrl: string;
  }

  interface MarketingList {
    id: number;
    title: string;
    subtitle: string;
    postTags: [{ postTagType: string; tag: string }];
    coverUrl: string;
    notionPageCreatedTime: string;
    notionPageLasetedEditedTime: string;
  }

  const [resultData, setResultData] = useState<ResultList>();
  const [BrandResult, setBrandResult] = useState<BrandList[]>();
  const [MarketingResult, setMarketingResult] = useState<MarketingList[]>();
  const { data: ResultData } = useQuery(
    ["resultData", inputValue],
    () => getSearchResult({ keyword: inputValue, size: 100 }),
    {
      onSuccess: (data) => {
        setResultData(data);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  useEffect(() => {
    if (resultData) {
      setBrandResult(resultData.brands);
      setMarketingResult(resultData.posts);
    }
  }, [resultData?.brands, resultData?.posts]);

  return (
    <ResultContainer>
      <NavBar />
      <ResultBox>
        <ResultTitle>'{inputValue}' 검색 결과</ResultTitle>
        <MarketingResultBox>
          <ResultText>
            ‘{inputValue}’이(가) 본문/제목에 언급된 마케팅 콘텐츠입니다. (
            {MarketingResult?.length})
          </ResultText>
          <MarketingsBox>
            <MarketingLines>
              {MarketingResult &&
                MarketingResult.map((data, index) => (
                  <MarketingBox
                    id={data.id}
                    imgSrc={data.coverUrl}
                    type={
                      data.postTags.find((tags) => tags.postTagType === "산업")
                        ?.tag || "Unknown"
                    }
                    title={data.title}
                    expl={data.subtitle}
                    read={727}
                    categories={data.postTags.map((tags) => tags.tag)}
                  />
                ))}
            </MarketingLines>
          </MarketingsBox>
        </MarketingResultBox>
        <BrandResultBox>
          <ResultText>
            ‘{inputValue}’이(가) 본문/제목에 언급된 브랜드입니다. (
            {BrandResult?.length})
          </ResultText>
          <BrandsBox>
            {BrandResult &&
              BrandResult.map((data, index) => (
                <BrandBox
                  imgSrc={data.coverUrl}
                  brandName={data.name}
                  tags={data.brandTags.map((tags) => tags.tag)}
                  id={data.id}
                />
              ))}
          </BrandsBox>
        </BrandResultBox>
      </ResultBox>
      <Footer />
    </ResultContainer>
  );
};

const queryClient = new QueryClient();

export default () => (
  <QueryClientProvider client={queryClient}>
    <SearchResult />
  </QueryClientProvider>
);
