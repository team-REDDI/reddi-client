import styled from "styled-components";
import { colors } from "../../styles/colors";
import { useCallback, useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/svgs/searchIcon.svg";
import { MarketingBoxSmall } from "../Home/MarketingBoxSmall";
import dropdownDataMarketing from "../../assets/datas/dropDownDataMarketing.json";
import dropdownDataBrand from "../../assets/datas/dropDownDataBrand.json";
import { useNavigate } from "react-router-dom";
import { getHotKeyword, getHotPostSearch } from "../../apis/searchAPI";
import { QueryClientProvider, useQuery } from "react-query";
import { QueryClient } from "@tanstack/react-query";
type SearchBarProps = {
  show: boolean;
  toggleSearchBar: () => void;
};

const queryClient = new QueryClient();
export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [wordList, setWordList] = useState<string>();
  useEffect(() => {}, [props.show]);

  const [inputValue, setInputValue] = useState<string>("");
  const nav = useNavigate();
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);

  const {
    data: hotPosts,
    isLoading,
    isError,
  } = useQuery("hotPosts", getHotPostSearch);
  console.log(hotPosts);

  interface KeywordType {
    keyword: string;
    count: number;
  }

  const [keywordsData, setKeywordsData] = useState<KeywordType[]>();
  const { data: hotKeywords } = useQuery("hotKeywords", getHotKeyword, {
    onSuccess: (data) => {
      setKeywordsData(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // useEffect(() => {
  //   console.log("키", keywordsData);
  // }, [keywordsData]);

  const goToResult = useCallback(() => {
    nav({
      pathname: "/search/result",
      search: `?input=${inputValue}`,
    });
    props.toggleSearchBar();
  }, [inputValue]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      //입력한 값이 없을 때 alert 추가
      if (inputValue.trim() === "") {
        alert("내용을 입력해주세요.");
      } else {
        goToResult();
      }
    },
    [inputValue, goToResult],
  );

  return (
    <SearchContainer show={props.show}>
      <SearchInputContainer show={props.show}>
        <InputContainer onSubmit={onSubmit}>
          <InputBar
            placeholder="검색"
            onChange={onChange}
            value={inputValue}
          ></InputBar>
          <SearchButton type="submit">
            <SearchIcon />
          </SearchButton>
          {/* <SearchImg src={require("../assets/images/Link.png")} /> */}
        </InputContainer>
      </SearchInputContainer>
      <SearchListBox show={props.show}>
        <WordsListBox>
          <SearchTitle>인기 검색어</SearchTitle>
          <WordsList>
            {keywordsData &&
              keywordsData.length > 0 &&
              keywordsData.map((item, index) => (
                <WordBox
                  key={index}
                  onClick={() => setInputValue(item.keyword)}
                >
                  <Word>{item.keyword}</Word>
                  <WordNum>{item.count}</WordNum>
                </WordBox>
              ))}
          </WordsList>
        </WordsListBox>
        <ReferenceBox>
          <SearchTitle>인기 마케팅 레퍼런스</SearchTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {hotPosts && hotPosts.length > 0 && (
              <MarketingBoxSmall
                id={hotPosts[0].id}
                lank={1}
                imgSrc={hotPosts[0].coverUrl}
                title={hotPosts[0].title}
                expl={hotPosts[0].subtitle}
              />
            )}
            {hotPosts && hotPosts.length > 0 && (
              <MarketingBoxSmall
                id={hotPosts[1].id}
                lank={2}
                imgSrc={hotPosts[1].coverUrl}
                title={hotPosts[1].title}
                expl={hotPosts[1].subtitle}
              />
            )}
          </div>
        </ReferenceBox>
      </SearchListBox>
    </SearchContainer>
  );
};

const SearchContainer = styled.div<{
  show: boolean;
}>`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 990;
  transform: translateY(${(props) => (props.show ? "0%" : "-100%")});
  transition: transform 10.3s ease-in;
`;

const SearchInputContainer = styled.div<{
  show: boolean;
}>`
  display: flex;
  width: 100%;
  height: 13.75rem;
  background-color: ${colors.black_CTA};
  z-index: 999;
  transform: translateY(${(props) => (props.show ? "0%" : "-100%")});
  transition: transform 10.3s ease-in;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.form`
  width: fit-content;
  display: flex;
  border-bottom: 0.0625rem solid #d9d9d9;
  height: 2.2rem;
  width: 35.25rem;
  padding-bottom: 0.35rem;
`;

const InputBar = styled.input`
  width: 32.5rem;
  outline: none;
  border: none;
  font-size: 1rem;
  color: #a4a4a4;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.63rem 0.56rem;
  background-color: transparent;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari */
    color: ${colors.grey_400};
  }
`;

const SearchImg = styled.img`
  display: flex;
  width: 1.8125rem;
  height: 1.8125rem;
`;

const SearchButton = styled.button`
  display: flex;
  /* width: 1.8125rem;
  height: 1.8125rem; */
  background-color: transparent;
  border: none;
  outline: none;
`;

const SearchListBox = styled.div<{
  show: boolean;
}>`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  box-sizing: border-box;
  width: 100%;
  height: 25.25rem;
  background-color: ${colors.white};
  z-index: 999;
  transform: translateY(${(props) => (props.show ? "0%" : "-100%")});
  transition: transform 10.3s ease-in;
`;

const WordsListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 28.5rem;
  height: fit-content;
  margin-right: 4.25rem;
`;

const WordsList = styled.div`
  display: flex;
  width: 28.5rem;
  height: 13.75rem;
  flex-wrap: wrap;
  gap: 1.5rem 3.12rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const WordBox = styled.div`
  display: flex;
  justify-content: start;

  cursor: pointer;
`;

const Word = styled.div`
  color: ${colors.black_CTA};
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01rem;
`;

const WordNum = styled.span`
  color: #525252;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.0075rem;
  margin-left: 0.31rem;
`;

const ReferenceBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30.6rem;
  height: fit-content;
`;

const SearchTitle = styled.span`
  color: ${colors.red};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
  margin-bottom: 2.44rem;
`;
