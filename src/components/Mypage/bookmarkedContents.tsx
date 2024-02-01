// 북마크 된 마케팅, 브랜드 컨텐츠 저장
import { colors } from "../../styles/colors";
import { SmallMarketingBox } from "../SmallMarketingBox";
import { BrandBox } from "../BrandBox";
import styled from "styled-components";
import { getBookmarkedMarketing } from "../../apis/mypageAPI";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../utils/atom";
import { useEffect, useState } from "react";
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
const dummyMarketingBoxes = [
  {
    imgSrc: "../assets/images/exemple.png",
    type: "PLACE",
    title: "더 현대를 밝히는 ‘해리의 꿈의 상점’",
    expl: "유럽 어느 골목을 들어와있는 듯한 착각",
    read: 727,
    categories: ["부티크", "팝업스토어", "콘텐츠 마케팅"],
  },
  {
    imgSrc: "../assets/images/exemple.png",
    type: "PLACE",
    title: "신세계 백화점의 ‘MAGIC WINTER FANTASY’",
    expl: "3분을 위한 9개월의 여정",
    read: 567,
    categories: ["부티크", "팝업스토어", "10대"],
  },
  {
    imgSrc: "../assets/images/exemple.png",
    type: "PLACE",
    title: "신세계 백화점의 ‘MAGIC WINTER FANTASY’",
    expl: "3분을 위한 9개월의 여정",
    read: 567,
    categories: ["부티크", "팝업스토어", "10대"],
  },
];

const dummyBrandBoxes = [
  {
    imgSrc: "/image.jpg", //나중에 이미지 여기다 넣으면 됨
    brandName: "토스증권",
    location: "대기업, 서울",
    tags: ["뷰티", "금융"],
    id: 2,
  },
  {
    imgSrc: "/image.jpg",
    brandName: "토스증권",
    location: "대기업, 서울",
    tags: ["금융", "블루"],
    id: 2,
  },
  {
    imgSrc: "/image.jpg",
    brandName: "토스증권",
    location: "대기업, 서울",
    tags: ["금융", "블루"],
    id: 2,
  },
  {
    imgSrc: "/image.jpg",
    brandName: "토스증권",
    location: "대기업, 서울",
    tags: ["뷰티", "세련된"],
    id: 2,
  },
  {
    imgSrc: "/image.jpg",
    brandName: "토스증권",
    location: "대기업, 서울",
    tags: ["뷰티", "깔끔한"],
    id: 2,
  },
];

export const BookmarkedContent = () => {
  const [accessToken] = useRecoilState(accessTokenState);
  const [marketingLists, setMarketingLists] = useState([]);

  useEffect(() => {
    const fetchMarketingLists = async () => {
      try {
        const data = await getBookmarkedMarketing(accessToken);
        setMarketingLists(data);
      } catch (error) {
        console.error("Error fetching marketing lists:", error);
      }
    };

    fetchMarketingLists();
  }, [accessToken]);

  console.log("marketingLists: ", marketingLists);
  return (
    <div>
      <TitleText>마케팅</TitleText>
      <BoxContainer>
        {marketingLists &&
          marketingLists.map((marketing: Marketing) => (
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
        {/* {dummyMarketingBoxes.map((box, index) => (
          <SmallMarketingBox
            key={index}
            imgSrc={box.imgSrc}
            type={box.type}
            title={box.title}
            expl={box.expl}
            read={box.read}
            categories={box.categories}
          />
        ))} */}
      </BoxContainer>
      <TitleText>브랜드</TitleText>
      <BoxContainer>
        {dummyBrandBoxes.map((box, index) => (
          <BrandBox
            id={box.id}
            key={index}
            imgSrc={box.imgSrc}
            brandName={box.brandName}
            tags={box.tags}
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
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
  color: ${colors.red};
  margin-bottom: 2.06rem;
  text-align: start;
`;
