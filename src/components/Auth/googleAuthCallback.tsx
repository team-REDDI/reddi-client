import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QueryClientProvider, useMutation, QueryClient } from "react-query";
import { googleCallback, loginUserInfo } from "../../apis/loginAPI";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  isLoginState,
  userDataState,
} from "../../utils/atom";

const queryClient = new QueryClient();

const GoogleAuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHandled, setIsHandled] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userData, setUserData] = useRecoilState(userDataState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const signInMutation = useMutation(googleCallback, {
    onSuccess: async (data) => {
      setAccessToken(data.data.accessToken);
      const userInfo = await loginUserInfo(data.data.accessToken);
      console.log("userData:", userInfo);

      setUserData({
        userId: userInfo.data.userInfo,
        name: userInfo.data.name,
        email: userInfo.data.email,
        profileImageUrl: userInfo.data.profileImageUrl,
      });
      setIsLogin(true);
      setIsHandled(true);
      navigate("/");
    },
    onError: (error) => {
      console.log("로그인에 실패하였습니다");
      setIsHandled(true);
    },
  });

  useEffect(() => {
    if (!isHandled) {
      const queryParams = new URLSearchParams(location.search);
      const code = queryParams.get("code");
      if (code) {
        signInMutation.mutate(code);
      }
    }
  }, [location, isHandled]);

  return <div></div>;
};

export default () => (
  <QueryClientProvider client={queryClient}>
    <GoogleAuthCallback />
  </QueryClientProvider>
);
