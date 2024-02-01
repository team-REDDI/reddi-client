import client from "./client";
export const postAIBranding = async ({
  info,
  accessToken,
}: {
  info: {
    element: string;
    atmos: string;
    industry: string;
    target: string;
    similar: string;
  };
  accessToken: string;
}) => {
  try {
    // console.log("INFO:", info, accessToken);
    const response = await client.post(
      "api/chat-gpt/question",
      {
        elements: info.element,
        atmospheres: info.atmos,
        industries: info.industry,
        targets: info.target,
        similarServices: info.similar,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );
    console.log("AIBrandingResult", response.data.result);
    return response.data.data.result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
