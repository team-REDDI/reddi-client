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
import { ReactComponent as Toss } from "../assets/svgs/toss_2.svg";
import { BrandBox } from "../components/BrandBox";
import { ReactComponent as BrandSVG } from "../assets/svgs/BrandSVG.svg";

import { useRecoilValue } from "recoil";
import { filteredBrand } from "../utils/atom";

const brandData = [
  [
    {
      id: 1,
      page_id: "8932a421-560d-448a-9c31-c5233bd7765c",
      created_time: "2023-11-22T06:09:00.000Z",
      last_edited_time: "2024-01-17T01:37:00.000Z",
      cover:
        "https://www.notion.so/images/page-cover/met_terracotta_funerary_plaque.jpg",
      properties: {
        "브랜드 분위기": ["키치함", "귀여움"],
        "MKT 종류": [],
        "MKT 타겟층": [],
        산업군: ["IT"],
        "브랜드 색감": [],
        이름: "어글리어스",
      },
    },
    {
      id: 2,
      page_id: "8932a421-560d-448a-9c31-c5233bd7765c",
      created_time: "2023-11-22T06:09:00.000Z",
      last_edited_time: "2024-01-17T01:37:00.000Z",
      cover: "https://www.notion.so/images/page-cover/webb1.jpg",
      properties: {
        "브랜드 분위기": ["키치함", "귀여움"],
        "MKT 종류": [],
        "MKT 타겟층": [],
        산업군: ["F&B"],
        "브랜드 색감": ["블루"],
        이름: "어글리어스2",
      },
    },
    {
      id: 3,
      page_id: "8932a421-560d-448a-9c31-c5233bd7765c",
      created_time: "2023-11-22T06:09:00.000Z",
      last_edited_time: "2024-01-17T01:37:00.000Z",
      cover:
        "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F245b7cab-78ce-4eca-ad7c-a658eb996c42%2Fc890b16d-662a-4b8a-a39a-c0b6c474901e%2FUntitled.jpeg?id=64efd15a-de2e-4924-8db7-fbe2c42c2336&table=block&spaceId=245b7cab-78ce-4eca-ad7c-a658eb996c42&width=2000&userId=f28e53ed-2327-4a11-81df-a53a318cec36&cache=v2",
      properties: {
        "브랜드 분위기": ["세련된"],
        "MKT 종류": [],
        "MKT 타겟층": [],
        산업군: ["금융"],
        "브랜드 색감": ["노랑"],
        이름: "어글리어스3",
      },
    },
    {
      id: 4,
      page_id: "8932a421-560d-448a-9c31-c5233bd7765c",
      created_time: "2023-11-22T06:09:00.000Z",
      last_edited_time: "2024-01-17T01:37:00.000Z",
      cover:
        "https://glowing-novel-3e6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa40970fa-0e5a-48e1-84e4-1da7cb5d21d8%2F1fa72401-7bcd-4cae-96e5-3090336f58ae%2FUntitled.jpeg?table=block&id=6933e525-85bf-4fc5-9841-dd7aef8fd617&spaceId=a40970fa-0e5a-48e1-84e4-1da7cb5d21d8&width=2000&userId=&cache=v2",
      properties: {
        "브랜드 분위기": ["세련된"],
        "MKT 종류": [],
        "MKT 타겟층": [],
        산업군: ["금융"],
        "브랜드 색감": ["노랑"],
        이름: "어글리어스3",
      },
    },
  ],
];

const dummyBrandBoxes = [
  {
    imgSrc: "/image.jpg", //나중에 이미지 여기다 넣으면 됨
    brandName: "토스증권",
    location: "대기업, 서울",
    tags: ["뷰티", "금융"],
  },
  {
    imgSrc: "/image.jpg",
    brandName: "토스증권",
    location: "대기업, 서울",
    tags: ["금융", "블루"],
  },
  {
    imgSrc: "/image.jpg",
    brandName: "토스증권",
    location: "대기업, 서울",
    tags: ["금융", "블루"],
  },
  {
    imgSrc: "/image.jpg",
    brandName: "토스증권",
    location: "대기업, 서울",
    tags: ["뷰티", "세련된"],
  },
  {
    imgSrc: "/image.jpg",
    brandName: "토스증권",
    location: "대기업, 서울",
    tags: ["뷰티", "깔끔한"],
  },
];

const Brand = () => {
  const selectedFilters = useRecoilValue(filteredBrand);

  const brandBoxes = brandData[0].map((brand) => ({
    imgSrc: brand.cover,
    brandName: brand.properties.이름,
    tags: [
      ...brand.properties["브랜드 색감"],
      ...brand.properties["브랜드 분위기"],
      ...brand.properties["산업군"],
    ].filter((tag) => tag),
    location: "대기업, 서울", // 없어서 일단 임의로 추가
  }));

  const filteredBoxes =
    selectedFilters.size > 0
      ? brandBoxes.filter((box) =>
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
          {filteredBoxes.map((box, index) => (
            <BrandBox
              key={index}
              imgSrc={box.imgSrc}
              brandName={box.brandName}
              location={box.location}
              tags={box.tags}
            />
          ))}
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

export default Brand;
