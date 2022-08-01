import axios from "axios";
import { QueryType } from "@types";

const BASE_URL: string = "https://snappfood.ir/mobile/v3/restaurant";

export const getVendorsList = (query: QueryType) => {
  const { page, pageSize, lat, long } = query;
  return axios.get(
    `${BASE_URL}/vendors-list?page=${page}&lat=${lat}&long=${long}&page_size=${pageSize}`
  );
};
