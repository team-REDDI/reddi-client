import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as DivideBar } from "../assets/svgs/dividebar.svg";
//marketing, brand GNB title 로 사용될 Header component
type HeaderProps = {
  title: string;
  subtitle: string;
  ImageComponent: React.FC<React.SVGProps<SVGSVGElement>>;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle, ImageComponent }) => {
  return (
    <HeaderContainer>
      <TitleWrapper>
        <Title>{title} </Title>
        <DivideBar />
        <ImageComponent />
      </TitleWrapper>
      <SubTitle>{subtitle}</SubTitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 11.25rem 10.6875rem 4.375rem 10.6875rem;
  gap: 1.12rem;
  width: 100%;
  background-color: black;
  color: white;
  box-sizing: border-box;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const Title = styled.div`
  color: ${colors.red};
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.0225rem;
`;
const SubTitle = styled.div`
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01rem;
`;
export default Header;
