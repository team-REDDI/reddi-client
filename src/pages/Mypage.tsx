import NavBar from "../components/NavBar";
import styled from "styled-components";
import {
  Container,
  MyPageContainer,
  ProfileContainer,
  ProfileImage,
  ProfileNameText,
  ProfileIdText,
} from "../styles/mypageStyle";
import Footer from "../components/Footer";
import Tab from "../components/Mypage/tab";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoginState, userDataState } from "../utils/atom";
import Login from "../components/Login";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactComponent as LoginImage } from "../assets/svgs/loginImage.svg";
import { ReactComponent as ReddiLogo } from "../assets/svgs/notLoginLogo.svg";
import { colors } from "../styles/colors";
import {
  getBookmarkedBrand,
  getBookmarkedMarketing,
  getCreatedAIBrand,
} from "../apis/mypageAPI";

const queryClient = new QueryClient();

const Mypage = () => {
  const [accessToken] = useRecoilState(accessTokenState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [userData, setUserData] = useRecoilState(userDataState);
  const [showLogin, setShowLogin] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [promptCount, setPromptCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const marketingData = await getBookmarkedMarketing(accessToken);
        const brandData = await getBookmarkedBrand(accessToken);
        const totalBookmarks =
          (marketingData?.length || 0) + (brandData?.length || 0);
        setBookmarkCount(totalBookmarks);
        const createdData = await getCreatedAIBrand(accessToken);
        setPromptCount(createdData.length);
      } catch (error) {
        console.error("Error fetching bookmark counts:", error);
      }
    };
    fetchCounts();
  }, [accessToken]);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  if (!isLogin) {
    return (
      <Container>
        <NavBar />
        <MyPageContainer>
          <ProfileContainer>
            <ProfileNameText>이레디</ProfileNameText>
            <ProfileIdText>readyornot</ProfileIdText>
          </ProfileContainer>
          <Tab bookmarkCount={0} promptCount={0} />
        </MyPageContainer>
        <Footer />

        <ContainerNotLogin>
          <LoginMessage>
            <ReddiLogo />
            <LoginText>로그인을 하셔야 서비스 이용이 가능합니다</LoginText>
            <LoginImage />
            <LoginBtn onClick={handleLoginClick}>로그인하기</LoginBtn>
            {showLogin && (
              <Login
                show={showLogin}
                setShow={setShowLogin}
                onSwitchSignUp={() => {}}
              />
            )}
          </LoginMessage>
        </ContainerNotLogin>
      </Container>
    );
  }
  return (
    <Container>
      <NavBar />
      <MyPageContainer>
        <ProfileContainer>
          <ProfileImage src={userData.profileImageUrl}></ProfileImage>
          <ProfileNameText>{userData.name}</ProfileNameText>
          <ProfileIdText>{userData.email}</ProfileIdText>
        </ProfileContainer>
        <Tab bookmarkCount={bookmarkCount} promptCount={promptCount} />
      </MyPageContainer>
      <Footer />
    </Container>
  );
};

const ContainerNotLogin = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
`;

const LoginMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 47.5625rem;
  height: 29.3125rem;
  text-align: center;
  gap: 2rem;
`;
const LoginText = styled.div`
  display: flex;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 1.4625rem */
  letter-spacing: -0.01125rem;
`;
const LoginBtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.72031rem;
  padding: 0.76875rem 0rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.76875rem;
  background: #000;
  color: ${colors.white};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 1.4625rem */
  letter-spacing: -0.01125rem;
  cursor: pointer;
`;

export default () => (
  <QueryClientProvider client={queryClient}>
    <Mypage />
  </QueryClientProvider>
);
