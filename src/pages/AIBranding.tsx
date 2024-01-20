import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import {
  AIResultBox,
  AIResultContanier,
  ButtonBox,
  CompleteButton,
  Container,
  DeleteButton,
  LoadingBox,
  LoadingContainer,
  LoadingDots,
  LoadingImg,
  LoadingImgBox,
  LoadingText,
  LoadingTitle,
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
    { id: 1, boxId: 2, contents: "역동적인", isClicked: false },
    { id: 2, boxId: 2, contents: "엣지있는", isClicked: false },
    { id: 3, boxId: 2, contents: "즐거운", isClicked: false },
    { id: 4, boxId: 2, contents: "즐거운", isClicked: false },
    { id: 5, boxId: 2, contents: "역동적인", isClicked: false },
    { id: 6, boxId: 2, contents: "키워드", isClicked: false },
    { id: 7, boxId: 2, contents: "엣지있는", isClicked: false },
  ];

  const tagsList3 = [
    //tags3
    { id: 1, boxId: 3, contents: "금융", isClicked: false },
    { id: 2, boxId: 3, contents: "F&B", isClicked: false },
    { id: 3, boxId: 3, contents: "산업군", isClicked: false },
    { id: 4, boxId: 3, contents: "산업군", isClicked: false },
    { id: 5, boxId: 3, contents: "역동적인", isClicked: false },
    { id: 6, boxId: 3, contents: "키워드", isClicked: false },
    { id: 7, boxId: 3, contents: "엣지있는", isClicked: false },
  ];

  const tagsList4 = [
    //tags4
    { id: 1, boxId: 4, contents: "gen Z", isClicked: false },
    { id: 2, boxId: 4, contents: "시니어", isClicked: false },
    { id: 3, boxId: 4, contents: "고객층", isClicked: false },
    { id: 4, boxId: 4, contents: "고객층", isClicked: false },
    { id: 5, boxId: 4, contents: "역동적인", isClicked: false },
    { id: 6, boxId: 4, contents: "키워드", isClicked: false },
    { id: 7, boxId: 4, contents: "엣지있는", isClicked: false },
  ];

  const tagsList5 = [
    //tags5
    { id: 1, boxId: 5, contents: "gen Z", isClicked: false },
    { id: 2, boxId: 5, contents: "시니어", isClicked: false },
    { id: 3, boxId: 5, contents: "고객층", isClicked: false },
    { id: 4, boxId: 5, contents: "고객층", isClicked: false },
    { id: 5, boxId: 5, contents: "역동적인", isClicked: false },
    { id: 6, boxId: 5, contents: "키워드", isClicked: false },
    { id: 7, boxId: 5, contents: "엣지있는", isClicked: false },
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
  const [tags1, setTags1] = useState<TagType[]>(tagsList1);
  const [tags2, setTags2] = useState<TagType[]>(tagsList2);
  const [tags3, setTags3] = useState<TagType[]>(tagsList3);
  const [tags4, setTags4] = useState<TagType[]>(tagsList4);
  const [tags5, setTags5] = useState<TagType[]>(tagsList5);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  type SetListFunction = React.Dispatch<React.SetStateAction<TagType[]>>;
  const handleClick = (
    id: number,
    boxIndex: number,
    tagList: TagType[],
    setList: SetListFunction,
  ) => {
    setList((prevList) =>
      prevList.map((tag) =>
        tag.id === id ? { ...tag, isClicked: !tag.isClicked } : tag,
      ),
    );
    console.log(tagList);

    const clickedTagExists = tagList.some((tag) => tag.isClicked);

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
    setTags2((prev) => [
      ...prev,
      {
        id: prev.length + 1,
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
    console.log(tags2);
  }, [isNow]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      {isLoading && (
        <LoadingContainer>
          <LoadingBox>
            <LoadingImgBox>
              <LoadingTitle>
                내게 꼭 맞는
                <br />
                브랜드를 만들고 있어요!
              </LoadingTitle>
              <LoadingText>잠시만 기다려주세요!</LoadingText>
              <LoadingImg src={require("../assets/images/Loading.png")} />
              <LoadingDots
                src={require("../assets/images/Loading-Animation.png")}
              />
            </LoadingImgBox>
          </LoadingBox>
        </LoadingContainer>
      )}
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
              <DeleteButton
                onClick={() => {
                  window.location.reload();
                  // setIsResult(false);
                }}
              >
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
                  <OrderNumber now={isNow[0]}>1</OrderNumber>
                  <OrderText now={isNow[0]}>브랜드 요소</OrderText>
                </OrderBox>
                <OrderLine now={isNow[1]} />
                <OrderBox>
                  <OrderNumber now={isNow[1]}>2</OrderNumber>
                  <OrderText now={isNow[1]}>분위기</OrderText>
                </OrderBox>
                <OrderLine now={isNow[2]} />
                <OrderBox>
                  <OrderNumber now={isNow[2]}>3</OrderNumber>
                  <OrderText now={isNow[2]}>산업군</OrderText>
                </OrderBox>
                <OrderLine now={isNow[3]} />
                <OrderBox>
                  <OrderNumber now={isNow[3]}>4</OrderNumber>
                  <OrderText now={isNow[3]}>타깃</OrderText>
                </OrderBox>
                <OrderLine now={isNow[4]} />
                <OrderBox>
                  <OrderNumber now={isNow[4]}>5</OrderNumber>
                  <OrderText now={isNow[4]}>유사 서비스</OrderText>
                </OrderBox>
              </OrderContaniner>

              <WantBox now={isNow[0]} index={1}>
                <WantText now={isNow[0]} index={1}>
                  어떤 브랜드 요소를 생성하고 싶나요?
                </WantText>
                <TagsBox>
                  {tags1.map(
                    (tag) =>
                      tag.id < 8 && (
                        <WantTags
                          key={tag.id}
                          isClicked={tag.isClicked}
                          onClick={() =>
                            handleClick(tag.id, tag.boxId, tags1, setTags1)
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
                    {tags2.map((tag) => (
                      <WantTags
                        key={tag.id}
                        isClicked={tag.isClicked}
                        onClick={() =>
                          handleClick(tag.id, tag.boxId, tags2, setTags2)
                        }
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
                    {tags3.map((tag) => (
                      <WantTags
                        key={tag.id}
                        isClicked={tag.isClicked}
                        onClick={() =>
                          handleClick(tag.id, tag.boxId, tags3, setTags3)
                        }
                      >
                        {tag.contents}
                      </WantTags>
                    ))}
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
                    {tags4.map((tag) => (
                      <WantTags
                        key={tag.id}
                        isClicked={tag.isClicked}
                        onClick={() =>
                          handleClick(tag.id, tag.boxId, tags4, setTags4)
                        }
                      >
                        {tag.contents}
                      </WantTags>
                    ))}
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
                    {tags5.map((tag) => (
                      <WantTags
                        key={tag.id}
                        isClicked={tag.isClicked}
                        onClick={() =>
                          handleClick(tag.id, tag.boxId, tags5, setTags5)
                        }
                      >
                        {tag.contents}
                      </WantTags>
                    ))}
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
              <CompleteButton
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsResult(true);
                    setIsLoading(false);
                  }, 1500);
                }}
              >
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
