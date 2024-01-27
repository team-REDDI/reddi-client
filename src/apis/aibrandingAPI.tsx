import client from "./client";

export const postAIBranding = async (info: {
  element: string;
  atmos: string;
  industry: string;
  target: string;
  similar: string;
}) => {
  try {
    const response = await client.post("api/chat-gpt/question", {
      elements: info.element,
      atmospheres: info.atmos,
      industries: info.industry,
      targets: info.target,
      similarServices: info.similar,
    });
    console.log("AIBrandingResult", response.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
