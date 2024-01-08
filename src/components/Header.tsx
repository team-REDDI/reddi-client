import styled from "styled-components";
import { colors } from "../styles/colors";
//marketing, brand GNB title 로 사용될 Header component
type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 11.25rem 10.6875rem 4.375rem 10.6875rem;
  gap: 0.625rem;
  width: 100vw;
  background-color: black;
  color: white;
  box-sizing: border-box;
`;

const Title = styled.div`
  color: ${colors.red};
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SubTitle = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;
export default Header;
