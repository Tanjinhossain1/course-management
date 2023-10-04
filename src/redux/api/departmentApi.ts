import { tagTypes } from "../tags";
import { baseApi } from "./baseApi"

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDepartment: build.mutation({
      query: (data) =>({
        url: DEPARTMENT_URL,
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.department]
    }),
    getAllDepartment: build.query({
      query: (arg:Record<string,any>) =>({
        url: DEPARTMENT_URL,
        method: "Get",
        params: arg,
      }), 
      transformResponse: (response,meta) => {
        return {
          departments: response,
          meta
        }
      },
      providesTags: [tagTypes.department]
    }), 
  }),
  
})

export const { useCreateDepartmentMutation, useGetAllDepartmentQuery } = departmentApi