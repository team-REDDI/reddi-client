import styled from "styled-components";
import { colors } from "../styles/colors";

const BookmarkFloating = () => {
  return <Container></Container>;
};

export default BookmarkFloating;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  width: 3.375rem;
  height: 11.25rem;
`;

const FloatingButton = styled.button``;

const BookmarkImg = styled.img``;

const ShareImg = styled.img``;

const ButtonText = styled.span`
  color: ${colors.black_CTA};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.0075rem;
`;

const ButtonClickedImg = styled.img``;
