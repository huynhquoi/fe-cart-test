import { callApi } from "@/axios/callApi";
import { API_SHOES, GET_METHOD } from "..";

export const GetAllShoes = async () => {
  return await callApi(API_SHOES, GET_METHOD);
};
