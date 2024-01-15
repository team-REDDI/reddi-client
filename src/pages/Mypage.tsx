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
const Mypage = () => {
  return (
    <Container>
      <NavBar />
      <MyPageContainer>
        <ProfileContainer>
          <ProfileImage></ProfileImage>
          <ProfileNameText>이레디</ProfileNameText>
          <ProfileIdText>readyornot</ProfileIdText>
        </ProfileContainer>
        <Tab />
      </MyPageContainer>
      <Footer />
    </Container>
  );
};
export default Mypage;
