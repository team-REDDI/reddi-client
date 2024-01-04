import styled from "styled-components";
import { colors } from "../../styles/colors";

interface BrandLankProps {
  lank: number;
  name: string;
  Icon: React.FC;
}

export const BrandLankBox = ({ lank, name, Icon }: BrandLankProps) => {
  return (
    <LankContainer>
      <LankLine>
        <LankNum>{lank}</LankNum>
        <BrandName>{name}</BrandName>
        <Icon />
        {/* <img src={Icon} alt={name} /> */}
      </LankLine>
    </LankContainer>
  );
};

const LankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 7.5rem;
  margin-top: 1.62rem;
`;

const LankLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: center;
  height: 5rem;
`;

const LankNum = styled.span`
  color: ${colors.black};
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 3.25rem;
  margin-right: 5.37rem;
`;

const BrandName = styled.span`
  color: ${colors.black};
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 3.25rem;
  margin-right: 2.44rem;
`;
