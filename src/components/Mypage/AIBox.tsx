import styled from "styled-components";
import { colors } from "../../styles/colors";

interface AIBoxProps {
  title: string;
  options: string[];
}

const AIBox = ({ title, options }: AIBoxProps) => {
  return (
    <Box>
      <Title>{title}</Title>
      <ExplText>생성한 브랜드 요소</ExplText>
      <OptionsContainer>
        {options.map((option, index) => (
          <Option key={index}>{option}</Option>
        ))}
      </OptionsContainer>
      <AIBoxButton>프롬프트 불러오기</AIBoxButton>
    </Box>
  );
};

const Box = styled.div`
  border: 0.5px solid #ececec;
  padding: 2.5rem;
  text-align: center;
`;

const Title = styled.div`
  color: ${colors.black_CTA};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 1.95rem */
  letter-spacing: -0.015rem;
  text-align: start;
  margin-bottom: 0.75rem;
`;
const ExplText = styled.div`
  width: 16.3125rem;
  text-align: start;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 1.3125rem */
  color: #8f8f8f;
  margin-bottom: 0.44rem;
`;
const OptionsContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Option = styled.span`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  background-color: ${colors.light_red};
  color: ${colors.red};
  display: inline-block;
`;

const AIBoxButton = styled.button`
  display: flex;
  width: 16.3125rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 1.125rem */
  letter-spacing: -0.0075rem;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: black;
  color: ${colors.white};
`;

export default AIBox;
