import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQueryFn, QueryReturnValue } from "@reduxjs/toolkit/query";
import toast from "react-hot-toast";

// Define a type for the API response
interface ApiResponse<T> {
  data?: T;
  error?: { data?: { message?: string } };
  meta?: any; // Adjust this type based on your actual meta structure
}

const baseQuery: BaseQueryFn = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: async (headers) => {
    // headers.set('Authorization', 'Bearer ' + token)
    headers.set("Content-Type", "application/json");
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("ngrok-skip-browser-warning", "69420");

    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn = async (args, api, extraOptions) => {
  let result: QueryReturnValue<any, any, any> = await baseQuery(
    args,
    api,
    extraOptions
  );

  const { data, error } = result;

  if (error && "data" in error && error.data?.message) {
    toast.error(error.data.message as string);
  }
  if (data && "message" in data) {
    toast.success(data.message as string);
  }

  return result as ApiResponse<any>;
};

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  tagTypes: [""],
  endpoints: () => ({}),
});
export default apiSlice;
