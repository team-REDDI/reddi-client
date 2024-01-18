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
import { useEffect, useState } from "react";
import AIResult from "../components/AIBranding/AIResult";

const AIBranding = () => {
  const tagsList1 = [
    //tags1
    { id: 1, boxId: 1, contents: "네이밍", isClicked: false },
    { id: 2, boxId: 1, contents: "슬로건", isClicked: false },
    { id: 3, boxId: 1, contents: "로고", isClicked: false },
    { id: 4, boxId: 1, contents: "버전 미션", isClicked: false },
    { id: 5, boxId: 1, contents: "브랜드 에센스", isClicked: false },
    { id: 6, boxId: 1, contents: "키워드", isClicked: false },
    { id: 7, boxId: 1, contents: "메니페스토", isClicked: false },
  ];

  const tagsList2 = [
    //tags2
    { id: 8, boxId: 2, contents: "역동적인", isClicked: false },
    { id: 9, boxId: 2, contents: "엣지있는", isClicked: false },
    { id: 10, boxId: 2, contents: "즐거운", isClicked: false },
    { id: 11, boxId: 2, contents: "즐거운", isClicked: false },
    { id: 12, boxId: 2, contents: "역동적인", isClicked: false },
    { id: 13, boxId: 2, contents: "키워드", isClicked: false },
    { id: 14, boxId: 2, contents: "엣지있는", isClicked: false },
  ];

  const [isResult, setIsResult] = useState<boolean>(false);
  const [isNow, setIsNow] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
  ]);

  const [inputValue, setInputValue] = useState<string>("");

  interface TagType {
    id: number;
    boxId: number;
    contents: string;
    isClicked: boolean;
  }

  const [isClicked, setIsClicked] = useState<TagType[]>(tagsList1);
  const [tag2, setTag2] = useState<TagType[]>(tagsList2);
  type SetListFunction = React.Dispatch<React.SetStateAction<TagType[]>>;

  const handleClick = (
    id: number,
    boxIndex: number,
    setList: SetListFunction,
  ) => {
    setList((prevList) =>
      prevList.map((tag) =>
        tag.id === id ? { ...tag, isClicked: !tag.isClicked } : tag,
      ),
    );
    console.log(tag2);

    const clickedTagExists = isClicked.some(
      (tag) => tag.isClicked && tag.boxId === boxIndex,
    );
    if (clickedTagExists) {
      const newIsNow = [...isNow];
      newIsNow[boxIndex] = true;
      setIsNow(newIsNow);
    } else {
      const newIsNow = [...isNow];
      newIsNow[boxIndex] = false;
      setIsNow(newIsNow);
    }
  };

  const handleSubmit = () => {
    const clickedTags = isClicked.filter((tag) => tag.isClicked);
    //서버로 전송
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTag2((prev) => [
      ...prev,
      {
        id: prev.length + 8,
        contents: inputValue,
        isClicked: true,
        boxId: 2,
      },
    ]);
    console.log(isClicked);
    setInputValue("");
  };

  // const createTag = (inputValue:string): void => {
  //   setTag2((prevLists) => {
  //     const newTag = {
  //       id: prevLists.length + 1,
  //       contents: inputValue,
  //       isClicked: true,
  //       boxId: 2,
  //     }
  //   })
  // }

  useEffect(() => {
    console.log(isNow);
    console.log(tag2);
  }, [isNow]);

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
                  <OrderNumber now={true}>1</OrderNumber>
                  <OrderText now={true}>브랜드 요소</OrderText>
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

              <WantBox now={isNow[0]} index={1}>
                <WantText now={isNow[0]} index={1}>
                  어떤 브랜드 요소를 생성하고 싶나요?
                </WantText>
                <TagsBox>
                  {isClicked.map(
                    (tag) =>
                      tag.id < 8 && (
                        <WantTags
                          key={tag.id}
                          isClicked={tag.isClicked}
                          onClick={() =>
                            handleClick(tag.id, tag.boxId, setIsClicked)
                          }
                        >
                          {tag.contents}
                        </WantTags>
                      ),
                  )}
                </TagsBox>
              </WantBox>

              {isNow[1] ? (
                <WantBox now={isNow[1]} index={2}>
                  <WantText now={isNow[1]} index={2}>
                    어떤 분위기를 원하나요?
                  </WantText>
                  <TagsBox>
                    {tag2.map((tag) => (
                      <WantTags
                        key={tag.id}
                        isClicked={tag.isClicked}
                        onClick={() => handleClick(tag.id, tag.boxId, setTag2)}
                      >
                        {tag.contents}
                      </WantTags>
                    ))}

                    <WantTagsInputBox onSubmit={onSubmit}>
                      <SearchIcon />
                      <WantTagsInput
                        placeholder="검색하기"
                        onChange={onChange}
                        value={inputValue}
                      />
                    </WantTagsInputBox>
                  </TagsBox>
                </WantBox>
              ) : null}
              {isNow[2] ? (
                <WantBox now={isNow[2]} index={3}>
                  <WantText now={isNow[2]} index={3}>
                    어떤 산업군에 종사하나요?
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
              ) : null}
              {isNow[3] ? (
                <WantBox now={isNow[3]} index={4}>
                  <WantText now={isNow[3]} index={4}>
                    이런 고객을 타깃으로 해요.
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
              ) : null}
              {isNow[4] ? (
                <WantBox index={5}>
                  <WantText index={5}>
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
              ) : null}
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
