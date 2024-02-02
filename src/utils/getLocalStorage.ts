import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { accessTokenState, isLoginState, userDataState } from "./atom";

export const GetLocalStorage = () => {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setIsLogin = useSetRecoilState(isLoginState);
  const setUserData = useSetRecoilState(userDataState);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (storedAccessToken) {
      // console.log("Local 값에 저장된거: ",storedAccessToken)
      setAccessToken(storedAccessToken);
    }

    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userDataObject = JSON.parse(storedUserData);
      setUserData(userDataObject);
    }

    const storedIsLogin = localStorage.getItem("isLogin");
    if (storedIsLogin !== null) {
      setIsLogin(storedIsLogin === "true");
    }
  }, [setAccessToken, setIsLogin, setUserData]);

  return null;
};
