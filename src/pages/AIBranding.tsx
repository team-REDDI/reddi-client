import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import {
  AIResultBox,
  AIResultContanier,
  ButtonBox,
  CompleteButton,
  Container,
  DeleteButton,
  OrderBox,
  OrderContaniner,
  OrderLine,
  OrderNumber,
  OrderText,
  ReddiAI,
  ReddiAIContainer,
  ReddiAIExp,
  ReddiAILine,
  ReddiAITitle,
  ReddiAITitleBox,
  ResultLine,
  ResultText,
  TagsBox,
  TagsContainer,
  TypeText,
  WantBox,
  WantTags,
  WantText,
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
        {/* <WantTypeBox>
          <QText>어떤 브랜드를 만들고 싶나요?</QText>
        </WantTypeBox> */}

        <TagsContainer>
          <OrderContaniner>
            <OrderBox>
              <OrderNumber>1</OrderNumber>
              <OrderText>브랜드 요소</OrderText>
            </OrderBox>
            <OrderLine />
            <OrderBox>
              <OrderNumber>2</OrderNumber>
              <OrderText>분위기</OrderText>
            </OrderBox>
            <OrderLine />
            <OrderBox>
              <OrderNumber>3</OrderNumber>
              <OrderText>산업군</OrderText>
            </OrderBox>
            <OrderLine />
            <OrderBox>
              <OrderNumber>4</OrderNumber>
              <OrderText>타깃</OrderText>
            </OrderBox>
            <OrderLine />
            <OrderBox>
              <OrderNumber>5</OrderNumber>
              <OrderText>유사 서비스</OrderText>
            </OrderBox>
          </OrderContaniner>

          <WantBox>
            <WantText>어떤 브랜드 요소를 생성하고 싶나요?</WantText>
            <TagsBox>
              <WantTags>네이밍</WantTags>
              <WantTags>네이밍</WantTags>
              <WantTags>네이밍</WantTags>
              <WantTags>브랜드 에센스</WantTags>
              <WantTags>브랜드 에센스</WantTags>
              <WantTags>브랜드 에센스</WantTags>
              <WantTags>브랜드 에센스</WantTags>
              <WantTags>네이밍</WantTags>
              <WantTags>브랜드 에센스</WantTags>
            </TagsBox>
          </WantBox>
          <WantBox>
            <WantText>어떤 분위기를 원하나요?</WantText>
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
          </WantBox>
          <WantBox>
            <WantText>어떤 산업군에 종사하나요?</WantText>
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
          </WantBox>
          <WantBox>
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
          </WantBox>
          <WantBox>
            <WantText>
              내 브랜드와의 유사 서비스에는 이런 것들이 있어요.
            </WantText>
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
          </WantBox>
        </TagsContainer>
        <ButtonBox>
          <DeleteButton>전체 삭제</DeleteButton>
          <CompleteButton>완료</CompleteButton>
        </ButtonBox>
        {/* <AIResultContanier>
          <ResultText>Reddi AI가 추천하는 홍길동님의 브랜드에요.</ResultText>
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
        </AIResultContanier> */}
      </ReddiAIContainer>
      <Footer />
    </Container>
  );
};

export default AIBranding;
