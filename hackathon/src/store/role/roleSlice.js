import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import configApi from "../../config/api.json";

export const roleAPI = createApi({
  reducerPath: "roleAPI",
  baseQuery: fetchBaseQuery({ baseUrl: configApi.url }),
  tagTypes: ["Role"],
  endpoints: (build) => ({
    fetchInfoRole: build.query({
      query: () => `${configApi.role}`,
      providesTags: ["Role"],
    }),
  }),
});
export const { useFetchInfoRoleQuery } = roleAPI;
