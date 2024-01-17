import styled from "styled-components";
import { colors } from "../styles/colors";
import { useCallback, useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/svgs/searchIcon.svg";
import { MarketingBoxSmall } from "./Home/MarketingBoxSmall";
import dropdownDataMarketing from "../assets/datas/dropDownDataMarketing.json";
import { useNavigate } from "react-router-dom";

type SearchBarProps = {
  show: boolean;
  toggleSearchBar: () => void;
};

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [wordList, setWordList] = useState<string>();
  useEffect(() => {}, [props.show]);

  const [inputValue, setInputValue] = useState<string>("");
  const nav = useNavigate();
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);

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
      goToResult();
      //입력한 값이 없을 때 alert 추가
      // if (inputValue.trim() === "") {
      //   alert("입력해주세요.");
      // } else {
      //   setInputValue("");
      // }
    },
    [inputValue, goToResult],
  );

  return (
    <SearchContainer show={props.show}>
      <SearchInputContainer show={props.show}>
        <InputContainer onSubmit={onSubmit}>
          <InputBar placeholder="검색" onChange={onChange}></InputBar>
          <SearchIcon />
          {/* <SearchImg src={require("../assets/images/Link.png")} /> */}
        </InputContainer>
      </SearchInputContainer>
      <SearchListBox show={props.show}>
        <WordsListBox>
          <SearchTitle>인기 검색어</SearchTitle>
          <WordsList>
            {Object.values(dropdownDataMarketing)
              .flat()
              .map((item) => (
                <WordBox>
                  <Word>{item.value}</Word>
                  <WordNum>91</WordNum>
                </WordBox>
              ))}
          </WordsList>
        </WordsListBox>
        <ReferenceBox>
          <SearchTitle>인기 마케팅 레퍼런스</SearchTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <MarketingBoxSmall
              lank={1}
              imgSrc="../assets/images/exemple.png"
              title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
              expl="유럽 어느 골목을 들어와있는 듯한 착각"
            />
            <MarketingBoxSmall
              lank={2}
              imgSrc="../assets/images/exemple.png"
              title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
              expl="유럽 어느 골목을 들어와있는 듯한 착각"
            />
          </div>
        </ReferenceBox>
      </SearchListBox>
    </SearchContainer>
  );
};

type SearchContainerProps = {
  show: boolean;
};

const SearchContainer = styled.div<SearchContainerProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  transform: translateY(${(props) => (props.show ? "0%" : "-100%")});
  transition: transform 10.3s ease-in;
`;

const SearchInputContainer = styled.div<SearchContainerProps>`
  display: flex;
  width: 100%;
  height: 13.75rem;
  background-color: ${colors.black_CTA};
  z-index: 99;
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

const SearchListBox = styled.div<SearchContainerProps>`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  box-sizing: border-box;
  width: 100%;
  height: 25.25rem;
  background-color: ${colors.white};
  z-index: 99;
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
  flex-wrap: wrap;
  gap: 1.5rem 3.12rem;
`;

const WordBox = styled.div`
  display: flex;
  justify-content: start;
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
