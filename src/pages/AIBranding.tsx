import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import {
  AIResultBox,
  AIResultContanier,
  ButtonBox,
  CompleteButton,
  Container,
  DeleteButton,
  LoadingBox,
  LoadingContainer,
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
  Blank,
  ReddiAIIcon,
  ButtonBox2,
} from "../styles/ReddiAIStyle";
import { ReactComponent as AddIcon } from "../assets/svgs/Plus.svg";
import { useEffect, useState } from "react";
import AIResult from "../components/AIBranding/AIResult";
import AIBrandingData from "../assets/datas/aiBrandingData.json";
import {
  QueryClientProvider,
  QueryClient,
  useMutation,
  Mutation,
} from "react-query";
import { postAIBranding, putAIBranding } from "../apis/aibrandingAPI";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoginState } from "../utils/atom";
import NotLoginAIBranding from "../components/NotLoginAIBranding";
import { colors } from "../styles/colors";
import LoadingDots from "../components/AIBranding/LoadingDots";

const queryClient = new QueryClient();

const AIBranding = () => {
  const [accessToken] = useRecoilState(accessTokenState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [isResult, setIsResult] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isBookmarkBubbleOn, setIsBookmarkBubbleOn] = useState<boolean>(false);

  //버블 기능

  useEffect(() => {
    setIsBookmarkBubbleOn(true);
  }, [isResult]);

  useEffect(() => {
    if (isBookmarkBubbleOn === true) {
      const timer = setTimeout(() => {
        setIsBookmarkBubbleOn(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isBookmarkBubbleOn]);

  const [isNow, setIsNow] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [createdID, setCreatedID] = useState(null);

  interface TagType {
    id: number;
    boxId: number;
    contents: string;
    isClicked: boolean;
  }

  const [tags1, setTags1] = useState<TagType[]>(AIBrandingData.tagsList1);
  const [tags2, setTags2] = useState<TagType[]>(AIBrandingData.tagsList2);
  const [tags3, setTags3] = useState<TagType[]>(AIBrandingData.tagsList3);
  const [tags4, setTags4] = useState<TagType[]>(AIBrandingData.tagsList4);
  const [tags5, setTags5] = useState<TagType[]>(AIBrandingData.tagsList5);

  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentBoxId, setCurrentBoxId] = useState<number>(1);
  const [inputValues, setInputValues] = useState({
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });

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
    // console.log(tagList);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // 해당 입력 필드의 값을 업데이트
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const input2 = form.elements.namedItem("input2") as HTMLInputElement;
    const input3 = form.elements.namedItem("input3") as HTMLInputElement;
    const input4 = form.elements.namedItem("input4") as HTMLInputElement;
    const input5 = form.elements.namedItem("input5") as HTMLInputElement;

    if (input2 && input2.value) {
      setTags2((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          contents: input2.value,
          isClicked: true,
          boxId: 2,
        },
      ]);
      setInputValues({
        ...inputValues,
        input2: "",
      });
    } else if (input3 && input3.value) {
      setTags3((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          contents: input3.value,
          isClicked: true,
          boxId: 3,
        },
      ]);
      setInputValues({
        ...inputValues,
        input3: "",
      });
    } else if (input4 && input4.value) {
      setTags4((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          contents: input4.value,
          isClicked: true,
          boxId: 4,
        },
      ]);
      setInputValues({
        ...inputValues,
        input4: "",
      });
    } else if (input5 && input5.value) {
      setTags5((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          contents: input5.value,
          isClicked: true,
          boxId: 5,
        },
      ]);
      setInputValues({
        ...inputValues,
        input5: "",
      });
    }
  };

  const handleButtonClicked = (boxIndex: number) => {
    if (isNow[4]) {
      handleSubmit();
    } else {
      setCurrentBoxId((prev) => prev + 1);
      const newIsNow = [...isNow];
      newIsNow[boxIndex] = true;
      setIsNow(newIsNow);
    }
  };

  const [everyClicked, setEveryClicked] = useState<boolean>(false);
  const clickEverything = () => {
    if (everyClicked)
      setTags1(tags1.map((tag) => ({ ...tag, isClicked: false })));
    else setTags1(tags1.map((tag) => ({ ...tag, isClicked: true })));
    setEveryClicked(!everyClicked);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsResult(false);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isResult]);

  const [isClicked, setIsClicked] = useState<TagType[]>([]);
  const handleSubmit = () => {
    const clickedTags1 = tags1
      .filter((tag) => tag.isClicked)
      .map((tag) => tag.contents)
      .join(", ");
    const clickedTags2 = tags2
      .filter((tag) => tag.isClicked)
      .map((tag) => tag.contents)
      .join(", ");
    const clickedTags3 = tags3
      .filter((tag) => tag.isClicked)
      .map((tag) => tag.contents)
      .join(", ");
    const clickedTags4 = tags4
      .filter((tag) => tag.isClicked)
      .map((tag) => tag.contents)
      .join(", ");
    const clickedTags5 = tags5
      .filter((tag) => tag.isClicked)
      .map((tag) => tag.contents)
      .join(", ");

    // console.log(clickedTags1);

    AIBrandingMutation.mutate({
      info: {
        element: clickedTags1,
        atmos: clickedTags2,
        industry: clickedTags3,
        target: clickedTags4,
        similar: clickedTags5,
      },
      accessToken: accessToken,
    });
  };
  const [brandingResult, setBrandingResult] = useState<[string, string][]>();

  const AIBrandingMutation = useMutation(postAIBranding, {
    onSuccess: (data) => {
      setCreatedID(data.id);
      setBrandingResult(data.result);
      setIsResult(true);
      console.log("ID:", createdID);
      console.log("RESULT:", brandingResult);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const { isLoading, isError, data } = AIBrandingMutation;

  const handleSaveClick = async () => {
    if (createdID && accessToken) {
      try {
        const data = await putAIBranding(createdID, accessToken);
        setIsSaved(true);
        setIsBookmarkBubbleOn(true);
        // alert("생성한 AI 브랜드가 저장되었습니다. 마이페이지에서 확인해보세요");
      } catch (error) {}
    }
  };

  useEffect(() => {
    // console.log("brandingResult", brandingResult);
  }, [brandingResult]);
  if (!isLogin) return <NotLoginAIBranding />;

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
              {/* <LoadingDots
                src={require("../assets/images/Loading-Animation.png")}
              /> */}
              <LoadingDots />
            </LoadingImgBox>
          </LoadingBox>
        </LoadingContainer>
      )}
      <NavBar />
      <ReddiAIContainer>
        <ReddiAITitleBox>
          <ReddiAILine>
            <ReddiAIIcon />
            <ReddiAI>AI</ReddiAI>
            <ReddiAITitle>로 만드는 나만의 브랜딩</ReddiAITitle>
          </ReddiAILine>
          <ReddiAIExp>
            AI와 함께하는 쉽고 편리한 브랜딩을 경험해보세요
          </ReddiAIExp>
        </ReddiAITitleBox>

        {isResult ? (
          <>
            {brandingResult && <AIResult resultData={brandingResult} />}

            <ButtonBox>
              <DeleteButton
                onClick={() => {
                  setIsResult(false);
                  window.location.reload();
                }}
              >
                다시 생성하기
              </DeleteButton>
              <CompleteButton onClick={handleSaveClick}>
                저장하기
              </CompleteButton>
            </ButtonBox>
            <ButtonBox2>
              {isBookmarkBubbleOn && (
                <BubbleBox>
                  <BubbleArrow />
                  <BubbleLine>
                    <BubbleText>
                      {isSaved
                        ? "마이페이지에 저장되었습니다."
                        : "마이페이지에 저장해보세요."}
                    </BubbleText>
                  </BubbleLine>
                </BubbleBox>
              )}
            </ButtonBox2>
            <Blank />
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
                  {tags1.map((tag) => (
                    <WantTags
                      key={tag.id}
                      isClicked={tag.isClicked}
                      onClick={() =>
                        handleClick(tag.id, tag.boxId, tags1, setTags1)
                      }
                    >
                      {tag.contents}
                    </WantTags>
                  ))}
                  <WantTags
                    key={0}
                    isClicked={everyClicked}
                    onClick={clickEverything}
                  >
                    모두 선택
                  </WantTags>
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
                      <AddIcon />
                      <WantTagsInput
                        placeholder="직접추가하기"
                        name="input2"
                        value={inputValues.input2}
                        onChange={onChange}
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
                    <WantTagsInputBox onSubmit={onSubmit}>
                      <AddIcon />
                      <WantTagsInput
                        placeholder="직접추가하기"
                        name="input3"
                        value={inputValues.input3}
                        onChange={onChange}
                      />
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
                    <WantTagsInputBox onSubmit={onSubmit}>
                      <AddIcon />
                      <WantTagsInput
                        placeholder="직접추가하기"
                        name="input4"
                        value={inputValues.input4}
                        onChange={onChange}
                      />
                    </WantTagsInputBox>
                  </TagsBox>
                </WantBox>
              ) : null}
              {isNow[4] ? (
                <WantBox now={isNow[4]} index={5}>
                  <WantText now={isNow[4]} index={5}>
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
                    <WantTagsInputBox onSubmit={onSubmit}>
                      <AddIcon />
                      <WantTagsInput
                        placeholder="직접추가하기"
                        name="input5"
                        value={inputValues.input5}
                        onChange={onChange}
                      />
                    </WantTagsInputBox>
                  </TagsBox>
                </WantBox>
              ) : null}
            </TagsContainer>
            <ButtonBox>
              <CompleteButton
                onClick={() => {
                  handleButtonClicked(currentBoxId);
                }}
              >
                {isNow[4] ? "생성하기" : "다음"}
              </CompleteButton>
            </ButtonBox>
          </>
        )}
      </ReddiAIContainer>

      <Footer />
    </Container>
  );
};

export default () => (
  <QueryClientProvider client={queryClient}>
    <AIBranding />
  </QueryClientProvider>
);

const BubbleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.7rem;
  margin-right: 0.37rem;
  width: 16.3125rem;
`;

const BubbleLine = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 0.25rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background-color: ${colors.black_CTA};
`;

const BubbleArrow = styled.div`
  border-bottom: 0.7rem solid ${colors.black_CTA};
  border-left: 0.5rem solid transparent;
`;
const BubbleText = styled.div`
  color: ${colors.white};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.0075rem;
`;
