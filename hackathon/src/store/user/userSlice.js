import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import configApi from "../../config/api.json";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: configApi.url }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    fetchInfoUser: build.query({
      query: (id) => `${configApi.role}/${id}`,
      providesTags: ["User"],
    }),
  }),
});
export const { useFetchInfoUserQuery } = userAPI;
