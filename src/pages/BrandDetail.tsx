import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
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

const BrandDetail = () => {
  const nav = useNavigate();

  const goBack = () => {
    nav(-1);
  };

  return (
    <BrandDetailContainer>
      <LogoContainer>
        <GoBackButton onClick={goBack}>뒤로가기</GoBackButton>
        <LogoBox>
          {/* <AesopLogo /> */}
          <LogoImg src={require("../assets/images/AesopLogo.png")} />
          <NameBox>
            <BrandName>Aesop</BrandName>
            <BrandType>코스메틱</BrandType>
          </NameBox>
        </LogoBox>
      </LogoContainer>
      <DetailContainer>
        <ContentBox>
          <ContentType>로고</ContentType>
          <LogoImg2 src={require("../assets/images/AesopLogoB.png")} />
        </ContentBox>
        <ContentBox>
          <ContentType>브랜드 스토리</ContentType>
          <BrandStory>
            이솝은 헤어 디자이너 데니스 파피티스의 불만에서 시작되었습니다.
            데니스는 강한 암모니아 향, 어려운 화학 물질이 들어간 미용 제품들을
            좋아하지 않았어요. 이에 직접 제품을 개발하게 되었습니다.
            <br />
            반드시 효능과 안전성만 입증된 성분만을 사용하기. 이솝의 철학입니다.
            이러한 철학을 위해 뷰티 업계에선 이례적으로 R&D 비용으로 80% 이상을
            지출하고 있죠.
            <br />
            세심하게 고안되어 효과적인 제품, 지적이고 지속 가능한 디자인, 각자의
            개성을 살린 모두 다 다른 공간까지. 복잡하지 않으면서도 간결하고
            효과적인 이솝 우화처럼, 이솝은 간결하고 일관된 원칙을 유지하며
            소비자에게 다가가고 있습니다.
          </BrandStory>
        </ContentBox>

        <ContentBox>
          <ContentType>브랜드 철학</ContentType>
          <BrandExpBox>
            <BrandExpTitle>기본에 충실하자</BrandExpTitle>
            <BrandExpText>
              전 제품에 식물성 추출물과 과학적으로 입증된 최소한의 화학 성분만을
              사용합니다.
              <br />
              동물 실험을 하지 않습니다.
            </BrandExpText>
          </BrandExpBox>
        </ContentBox>

        <ContentBox>
          <ContentType>슬로건</ContentType>
          <BrandExpBox>
            <BrandExpTitle>Still by hands</BrandExpTitle>
            <BrandExpText>
              핸즈의 시작부터 지금까지 변하지 않는 가치를 중시합니다.
            </BrandExpText>
          </BrandExpBox>
        </ContentBox>

        <ContentBoxCol>
          <ContentType>마케팅 레퍼런스</ContentType>
          <MarketingCol>
            <MarketingBoxSmall
              lank={null}
              imgSrc="../assets/images/exemple.png"
              title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
              expl="유럽 어느 골목을 들어와있는 듯한 착각"
            />
            <MarketingBoxSmall
              lank={null}
              imgSrc="../assets/images/exemple.png"
              title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
              expl="유럽 어느 골목을 들어와있는 듯한 착각"
            />
            <MarketingBoxSmall
              lank={null}
              imgSrc="../assets/images/exemple.png"
              title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
              expl="유럽 어느 골목을 들어와있는 듯한 착각"
            />
            <MarketingBoxSmall
              lank={null}
              imgSrc="../assets/images/exemple.png"
              title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
              expl="유럽 어느 골목을 들어와있는 듯한 착각"
            />
            <MarketingBoxSmall
              lank={null}
              imgSrc="../assets/images/exemple.png"
              title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
              expl="유럽 어느 골목을 들어와있는 듯한 착각"
            />
            <MarketingBoxSmall
              lank={null}
              imgSrc="../assets/images/exemple.png"
              title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
              expl="유럽 어느 골목을 들어와있는 듯한 착각"
            />
          </MarketingCol>
        </ContentBoxCol>
      </DetailContainer>
      <Footer />
    </BrandDetailContainer>
  );
};

export default BrandDetail;
