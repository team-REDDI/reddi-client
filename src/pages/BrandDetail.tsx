import { BrandTitleRow, HomeImage, HomeTitle } from "../styles/HomeStyle";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  BrandDetailContainer,
  BrandName,
  BrandType,
  GoBackButton,
  LogoBox,
  LogoContainer,
  LogoImg,
  NameBox,
} from "../styles/brandStyle";

const BrandDetail = () => {
  const nav = useNavigate();

  const goBack = () => {
    nav(-1);
  };
  return (
    <BrandDetailContainer>
      <LogoContainer>
        <GoBackButton onClick={goBack}>뒤로가기</GoBackButton>
        <LogoBox>
          {/* <AesopLogo /> */}
          <LogoImg src={require("../assets/images/AesopLogo.png")} />
          <NameBox>
            <BrandName>Aesop</BrandName>
            <BrandType>코스메틱</BrandType>
          </NameBox>
        </LogoBox>
      </LogoContainer>
      <Footer />
    </BrandDetailContainer>
  );
};

export default BrandDetail;
