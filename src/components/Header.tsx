import styled from "styled-components";
//marketing, brand GNB title 로 사용될 Header component
type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: relative;
  height: 25rem;
  background-color: black;
  color: white;
`;

const Title = styled.div`
  position: absolute;
  bottom: 5.81rem;
  left: 18.75rem;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 800;
  line-height: 6rem;
`;

export default Header;
