import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi"

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginDaa) =>({
        url: `/${AUTH_URL}/login`,
        method: "POST",
        data: loginDaa
      }),
      invalidatesTags: [tagTypes.department]
    }),
  }),
  
})

export const { useUserLoginMutation } = authApi