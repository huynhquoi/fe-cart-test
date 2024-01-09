import axios from "axios";

let ACCESS_TOKEN = "";

export const callApi = async (endpoint: string, method: string, data?: any) => {
  if (typeof window === "undefined") {
    return;
  } else {
    ACCESS_TOKEN = localStorage.getItem("access_token") as string;
  }
  const response = await axios({
    url: endpoint,
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    params: data,
  });

  return response.data;
};
