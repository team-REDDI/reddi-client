import styled from "styled-components";
import { colors } from "../styles/colors";
import { useCallback, useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/svgs/searchIcon.svg";
import { MarketingBoxSmall } from "./Home/MarketingBoxSmall";

type SearchBarProps = {
  show: boolean;
};

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  useEffect(() => {}, [props.show]);

  const [inputValue, setInputValue] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      //입력한 값이 없을 때 alert 추가
      if (inputValue.trim() === "") {
        alert("입력해주세요.");
      } else {
        setInputValue("");
      }
    },
    [inputValue],
  );

  return (
    <SearchContainer show={props.show}>
      <SearchInputContainer show={props.show}>
        <InputContainer>
          <InputBar placeholder="검색"></InputBar>
          <SearchIcon />
          {/* <SearchImg src={require("../assets/images/Link.png")} /> */}
        </InputContainer>
      </SearchInputContainer>
      <SearchListBox show={props.show}>
        <WordBox>
          <SearchTitle>인기 검색어</SearchTitle>
        </WordBox>
        <ReferenceBox>
          <SearchTitle>인기 마케팅 레퍼런스</SearchTitle>
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

const WordBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 28.5rem;
  height: fit-content;
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
`;
