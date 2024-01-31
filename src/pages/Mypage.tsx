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
import { isLoginState, userDataState } from "../utils/atom";
import Login from "../components/Login";

const Mypage = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [userData, setUserData] = useRecoilState(userDataState);

  if (!isLogin) {
    return (
      <div>
        <NavBar />
        로그인하세요
      </div>
    );
  }
  return (
    <Container>
      <NavBar />
      <MyPageContainer>
        <ProfileContainer>
          <ProfileImage src={userData.profileImageUrl}></ProfileImage>
          <ProfileNameText>{userData.name}</ProfileNameText>
          <ProfileIdText>readyornot</ProfileIdText>
        </ProfileContainer>
        <Tab />
      </MyPageContainer>
      <Footer />
    </Container>
  );
};
export default Mypage;
