import styled from "styled-components";
import { colors } from "./colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.125rem;
`;

export const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6.25rem 0;
  width: 64rem;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 5.89756rem;
  height: 5.89756rem;
  border-radius: 50%;
  background-color: #d9d9d9;
  object-fit: cover;
  object-position: center;
`;

export const ProfileNameText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
  margin-top: 1.5rem;
  color: ${colors.black_CTA};
`;

export const ProfileIdText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
  margin-top: 0.75rem;
  color: ${colors.black_CTA};
`;
