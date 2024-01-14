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
  WantTagsInput,
  WantTagsInputBox,
  WantText,
} from "../styles/ReddiAIStyle";
import { ReactComponent as SearchIcon } from "../assets/svgs/searchSmall.svg";
import { useState } from "react";
import AIResult from "../components/AIBranding/AIResult";
import { colors } from "../styles/colors";

const AIBranding = () => {
  const [isResult, setIsResult] = useState<boolean>(false);
  const [isNow, setIsNow] = useState<boolean>(true);

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

        {isResult ? (
          <>
            <AIResult />
            <ButtonBox>
              <DeleteButton onClick={() => setIsResult(false)}>
                다시 생성하기
              </DeleteButton>
              <CompleteButton>저장하기</CompleteButton>
            </ButtonBox>
            <div style={{ height: 200 }} />
          </>
        ) : (
          <>
            <TagsContainer>
              <OrderContaniner>
                <OrderBox>
                  <OrderNumber now={isNow}>1</OrderNumber>
                  <OrderText now={isNow}>브랜드 요소</OrderText>
                </OrderBox>
                <OrderLine now={isNow} />
                <OrderBox>
                  <OrderNumber now={isNow}>2</OrderNumber>
                  <OrderText now={isNow}>분위기</OrderText>
                </OrderBox>
                <OrderLine now={isNow} />
                <OrderBox>
                  <OrderNumber now={isNow}>3</OrderNumber>
                  <OrderText now={isNow}>산업군</OrderText>
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

              <WantBox now={isNow}>
                <WantText now={isNow}>
                  어떤 브랜드 요소를 생성하고 싶나요?
                </WantText>
                <TagsBox>
                  <WantTags isClicked={true}>네이밍</WantTags>
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
              <WantBox now={isNow}>
                <WantText now={isNow}>어떤 분위기를 원하나요?</WantText>
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
                  <WantTagsInputBox>
                    <SearchIcon />
                    <WantTagsInput placeholder="검색하기" />
                  </WantTagsInputBox>
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
                  <WantTagsInputBox>
                    <SearchIcon />
                    <WantTagsInput placeholder="검색하기" />
                  </WantTagsInputBox>
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
                  <WantTagsInputBox>
                    <SearchIcon />
                    <WantTagsInput placeholder="검색하기" />
                  </WantTagsInputBox>
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
                  <WantTagsInputBox>
                    <SearchIcon />
                    <WantTagsInput placeholder="검색하기" />
                  </WantTagsInputBox>
                </TagsBox>
              </WantBox>
            </TagsContainer>
            <ButtonBox>
              <DeleteButton>전체 삭제</DeleteButton>
              <CompleteButton onClick={() => setIsResult(true)}>
                완료
              </CompleteButton>
            </ButtonBox>
          </>
        )}
      </ReddiAIContainer>
      <Footer />
    </Container>
  );
};

export default AIBranding;
