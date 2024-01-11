import styled from "styled-components";
import { colors } from "../styles/colors";
import { useCallback, useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/svgs/searchIcon.svg";

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
      if (inputValue.trim() == "") {
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
        <InputBar placeholder="검색"></InputBar>
        <SearchIcon />
      </SearchInputContainer>
      <SearchListBox show={props.show}>안녕</SearchListBox>
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

const SearchInputContainer = styled.form<SearchContainerProps>`
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
`;

const InputBar = styled.input`
  width: 35.25rem;
  height: 2.2rem;
  outline: none;
  border: none;
  font-size: 1rem;
  color: #a4a4a4;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
  padding: 0.63rem 0.56rem;
  background-color: transparent;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari */
    color: ${colors.grey_400};
  }
`;

const SearchListBox = styled.div<SearchContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25.25rem;
  background-color: ${colors.white};
  z-index: 99;
  transform: translateY(${(props) => (props.show ? "0%" : "-100%")});
  transition: transform 10.3s ease-in;
`;
