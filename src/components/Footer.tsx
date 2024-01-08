import styled from "styled-components";
import { colors } from "../styles/colors";

export const Footer = () => {
  return (
    <Container>
      <REDDI>REDDI</REDDI>
      <ReddiExp>
        레디는 성공적인 브랜딩을 위한 브랜딩 레퍼런스 아카이빙 서비스입니다.
        <br />
        당신의 브랜드가 진정한 가치를 표현할 수 있는 그 날까지, <br />
        레디와 함께라면, 사랑받는 브랜드가 될 준비는 끝났습니다.
      </ReddiExp>
      <ReddiButtonRow>
        <ReddiButton>2024. REDDI. ALL RIGHTS RESERVED</ReddiButton>
        <ReddiButton>이용약관</ReddiButton>
        <ReddiButton>개인정보 처리방침</ReddiButton>
      </ReddiButtonRow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 19.3125rem;
  padding: 4.375rem 12rem;
  flex-direction: column;
  align-items: flex-start;
  border-top: 0.5px solid ${colors.black_CTA};
  background-color: ${colors.black};
  margin-top: 6.26rem;
  box-sizing: border-box;
  /* bottom: 0px;
  position: absolute; */
`;

const REDDI = styled.span`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 1.5rem;
`;

const ReddiExp = styled.div`
  width: 25.25rem;
  color: ${colors.white};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 3.13rem;
`;

const ReddiButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`;

const ReddiButton = styled.span`
  color: #ccc;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.0075rem;
`;
