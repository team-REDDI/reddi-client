import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import {
  AIResultBox,
  AIResultContanier,
  ButtonBox,
  CompleteButton,
  Container,
  DeleteButton,
  QText,
  ReddiAI,
  ReddiAIContainer,
  ReddiAIExp,
  ReddiAILine,
  ReddiAITitle,
  ReddiAITitleBox,
  ResultLine,
  TagsBox,
  TagsContainer,
  TypeText,
  WantTags,
  WantText,
  WantTypeBox,
} from "../styles/ReddiAIStyle";

const AIBranding = () => {
  return (
    <Container>
      <NavBar />
      <ReddiAIContainer>
        <ReddiAITitleBox>
          <ReddiAILine>
            <ReddiAI>Reddi AI</ReddiAI>
            <ReddiAITitle>로 만드는 나만의 브랜딩</ReddiAITitle>
          </ReddiAILine>
          <ReddiAIExp>
            AI와 함께하는 쉽고 편리한 브랜딩을 경험해보세요
          </ReddiAIExp>
        </ReddiAITitleBox>

        <WantTypeBox>
          <QText>어떤 브랜드를 만들고 싶나요?</QText>
        </WantTypeBox>

        <TagsContainer>
          <WantText>이런 브랜드 요소를 생성하고 싶어요.</WantText>
          <TagsBox>
            <WantTags>네이밍</WantTags>
            <WantTags>네이밍</WantTags>
            <WantTags>네이밍</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
          </TagsBox>
          <WantText>이런 분위기였으면 좋겠어요.</WantText>
          <TagsBox>
            <WantTags>네이밍</WantTags>
            <WantTags>네이밍</WantTags>
            <WantTags>네이밍</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
          </TagsBox>
          <WantText>이런 산업군에 종사해요.</WantText>
          <TagsBox>
            <WantTags>네이밍</WantTags>
            <WantTags>네이밍</WantTags>
            <WantTags>네이밍</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
          </TagsBox>
          <WantText>이런 고객을 타깃으로 해요.</WantText>
          <TagsBox>
            <WantTags>네이밍</WantTags>
            <WantTags>네이밍</WantTags>
            <WantTags>네이밍</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
          </TagsBox>
          <WantText>내 브랜드와의 유사 서비스에는 이런 것들이 있어요.</WantText>
          <TagsBox>
            <WantTags>네이밍</WantTags>
            <WantTags>네이밍</WantTags>
            <WantTags>네이밍</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
            <WantTags>브랜드 에센스</WantTags>
          </TagsBox>
          <ButtonBox>
            <DeleteButton>전체 삭제</DeleteButton>
            <CompleteButton>완료</CompleteButton>
          </ButtonBox>
        </TagsContainer>
        <AIResultContanier>
          <QText>AI가 추천하는 홍길동님의 브랜드에요.</QText>
          <AIResultBox>
            <ResultLine>
              <TypeText>네이밍</TypeText>
              <WantText>뱅크샐러드</WantText>
            </ResultLine>
            <ResultLine>
              <TypeText>슬로건</TypeText>
              <WantText>금융을 넘어 건강 자산까지, 한 입에</WantText>
            </ResultLine>
          </AIResultBox>
          <ButtonBox>
            <DeleteButton>다시 생성하기</DeleteButton>
            <CompleteButton>저장하기</CompleteButton>
          </ButtonBox>
        </AIResultContanier>
      </ReddiAIContainer>
      <Footer />
    </Container>
  );
};

export default AIBranding;
