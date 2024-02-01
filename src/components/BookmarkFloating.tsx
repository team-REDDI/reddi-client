import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as BookmarkIcon } from "../assets/svgs/Bookmark.svg";
import { ReactComponent as Share } from "../assets/svgs/Share.svg";
import { ReactComponent as BookmarkClickedIcon } from "../assets/svgs/BookmarkClicked.svg";
import { ReactComponent as ShareClickedIcon } from "../assets/svgs/ShardClicked.svg";
import { useEffect, useState } from "react";
import {
  putBrandToggleBookmark,
  putMarketingToggleBookmark,
} from "../apis/bookmarkAPI";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../utils/atom";
import { useLocation, useParams } from "react-router-dom";

const BookmarkFloating = () => {
  const [isBookmarkClicked, SetIsBookmarkClicked] = useState<boolean>(false);
  const [isShareClicked, SetIsShareClicked] = useState<boolean>(false);
  const [isBookmarkBubbleOn, setIsBookmarkBubbleOn] = useState<boolean>(false);
  const [isShareBubbleOn, setIsShareBubbleOn] = useState<boolean>(false);
  const [accessToken] = useRecoilState(accessTokenState);
  const location = useLocation();

  const { id } = useParams();
  const brandId = Number(id);
  console.log(location.pathname);
  const BookMarkClicked = async () => {
    let bookmarkResult = false;

    if (location.pathname.includes("brand")) {
      bookmarkResult = await putBrandToggleBookmark(brandId, accessToken);
    } else if (location.pathname.includes("marketing")) {
      bookmarkResult = await putMarketingToggleBookmark(brandId, accessToken);
    }
    console.log(bookmarkResult);
    SetIsBookmarkClicked(bookmarkResult);
    setIsBookmarkBubbleOn(true); // 북마크 상태 변경 후 버블 표시

    if (isBookmarkClicked === false) setIsBookmarkBubbleOn(true);
  };

  const ShareClicked = () => {
    SetIsShareClicked(!isShareClicked);
    if (isShareClicked === false) setIsShareBubbleOn(true);
  };

  useEffect(() => {
    if (isBookmarkBubbleOn === true) {
      const timer = setTimeout(() => {
        setIsBookmarkBubbleOn(false);
      }, 2000);

      // 컴포넌트가 언마운트되면 타이머 클리어
      return () => clearTimeout(timer);
    }
  }, [isBookmarkBubbleOn]);

  useEffect(() => {
    if (isShareBubbleOn === true) {
      const timer = setTimeout(() => {
        setIsShareBubbleOn(false);
        SetIsShareClicked(false);
      }, 700);

      // 컴포넌트가 언마운트되면 타이머 클리어
      return () => clearTimeout(timer);
    }
  }, [isShareBubbleOn]);

  return (
    <Container>
      <FloatingBox>
        <ButtonsContainer>
          {isBookmarkBubbleOn && (
            <BubbleBox>
              <BubbleLine>
                <BubbleText>마이페이지에 저장되었습니다</BubbleText>
              </BubbleLine>
              <BubbleArrow />
            </BubbleBox>
          )}
          <FloatingButton>
            {isBookmarkClicked ? (
              <BookmarkClickedButton onClick={BookMarkClicked} />
            ) : (
              <BookmarkButton onClick={BookMarkClicked} />
            )}
            <ButtonText>북마크</ButtonText>
          </FloatingButton>
        </ButtonsContainer>

        <ButtonsContainer>
          {isShareBubbleOn && (
            <BubbleBox>
              <BubbleLine>
                <BubbleText>클립보드에 복사되었습니다</BubbleText>
              </BubbleLine>
              <BubbleArrow />
            </BubbleBox>
          )}
          <FloatingButton>
            {isShareClicked ? (
              <ShareClickedButton onClick={ShareClicked} />
            ) : (
              <ShareButton onClick={ShareClicked} />
            )}
            <ButtonText>공유</ButtonText>
          </FloatingButton>
        </ButtonsContainer>
      </FloatingBox>
    </Container>
  );
};

export default BookmarkFloating;

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-start;
  /* top: 40.625rem; */
  top: 70%;
  right: 2.38rem;
`;

const FloatingBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 11.25rem;
  align-items: flex-end;
`;

const FloatingButton = styled.div`
  display: flex;
  height: 5rem;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const BookmarkButton = styled(BookmarkIcon)`
  display: flex;
  width: 3.375rem;
  height: 3.375rem;
  cursor: pointer;
`;

const BookmarkClickedButton = styled(BookmarkClickedIcon)`
  display: flex;
  width: 3.375rem;
  height: 3.375rem;
  cursor: pointer;
`;

const ShareButton = styled(Share)`
  display: flex;
  width: 3.375rem;
  height: 3.375rem;
  cursor: pointer;
`;

const ShareClickedButton = styled(ShareClickedIcon)`
  display: flex;
  width: 3.375rem;
  height: 3.375rem;
  cursor: pointer;
`;

const ButtonText = styled.span`
  color: ${colors.black_CTA};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.0075rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
`;

const BubbleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.7rem;
  margin-right: 0.37rem;
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
  border-left: 0.7rem solid ${colors.black_CTA};
  border-top: 0.5rem solid transparent;
`;

const BubbleText = styled.div`
  color: ${colors.white};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.0075rem;
`;
