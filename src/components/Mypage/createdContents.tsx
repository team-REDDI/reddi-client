// reddiAI 를 통해 생성된 컨텐츠들
import styled from "styled-components";
import AIBox from "./AIBox";
import { useQuery } from "react-query";
import { getCreatedAIBrand } from "../../apis/mypageAPI";
import {
  accessTokenState,
  isLoginState,
  userDataState,
} from "../../utils/atom";
import { useState } from "react";
import { useRecoilState } from "recoil";

export const CreatedContents = () => {
  interface AIBoxProps {
    id: number;
    name?: string;
    elements: string[];
  }

  const [accessToken] = useRecoilState(accessTokenState);
  const [brandedData, setBrandedData] = useState<AIBoxProps[]>([]);
  const { data: CreatedData } = useQuery(
    ["createdData", accessToken],
    () => getCreatedAIBrand(accessToken),
    {
      onSuccess: (data) => {
        setBrandedData(data);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  return (
    <div>
      <BoxContainer>
        {brandedData &&
          Object.values(brandedData).map((brand) => (
            <AIBox
              key={brand.id}
              id={brand.id}
              name={brand.name}
              elements={Array.isArray(brand.elements) ? brand.elements : []}
              accessToken={accessToken}
            />
          ))}
      </BoxContainer>
    </div>
  );
};
const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.75rem;
  margin-bottom: 6.25rem;
`;
