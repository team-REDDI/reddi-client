import client from "./client";

export const getGoogleAuthURL = async () => {
  const redirectUri =
    window.location.hostname === "localhost"
      ? "http://localhost:3000/auth/google/callback"
      : "https://reddi.kr/auth/google/callback";

  try {
    const response = await client.get(
      `api/auth/google-auth-url?redirectUri=${encodeURIComponent(redirectUri)}`,
    );
    // console.log("response.data");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const googleCallback = async (code: string) => {
  const redirectUri =
    window.location.hostname === "localhost"
      ? "http://localhost:3000/auth/google/callback"
      : "https://reddi.kr/auth/google/callback";

  try {
    const response = await client.post("api/auth/google/login", {
      code: code,
      redirectUri: redirectUri,
    });
    // console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUserInfo = async (accessToken: string) => {
  const response = await client.get("/api/auth/info", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  // console.log("Login User:", response.data);
  return response.data;
};
